import { useState, useEffect } from "react";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";

const SearchBooks = ({onMoveBook}) => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [myBooks,setMyBooks] = useState([]);


  const getBooksIdInShelves = async () => {
    const BooksInShelves = await BooksAPI.getAll();
    setMyBooks(BooksInShelves)
  }

  const getBooks = async () => {

    if (query !== "")
    {
      const res = await BooksAPI.search(query, 10);  
      
      // Update the shelf of books in my library
      for (let i=0; i < res.length; i++){
        
        for (let idBook=0; idBook < myBooks.length; idBook++){
          
          if (myBooks[idBook].id === res[i].id){
            res[i]['shelf'] = myBooks[idBook].shelf.split(' ').join('').trim();
            console.log("Res:",res[i]);
            break;
          }
        }
      }

      console.log(myBooks);

      console.log("====================");
      console.log(res);
      

      setBooks(res);
    }
    
  };

  useEffect(() => {    
    getBooksIdInShelves();
  }, []);

  const updateQuery = (query) => {
    setQuery(query.trim());     
    getBooks();
  };

  const matchBooks =
    (query === "" )
      ? []
      : (books.length > 0) ? (books.filter((b) =>
          b.title.toLowerCase().includes(query.toLowerCase()))) : [];



  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {matchBooks.map((book) => (
            <li>
              <Book key={book.id} bookInfo={book} onMoveBook={onMoveBook} />
            </li>
          ))}
        </ol>

      </div>
    </div>
  );
};

export default SearchBooks;
