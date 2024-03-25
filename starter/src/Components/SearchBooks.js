import { useState, useEffect } from "react";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


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

      
      const res = await BooksAPI.search(query, 20);  

      console.log(res)
      
      // Update the current shelf of books in my library
      for (let i=0; i < res.length; i++){
        
        for (let idBook=0; idBook < myBooks.length; idBook++){
          
          if (myBooks[idBook].id === res[i].id){
            res[i]['shelf'] = myBooks[idBook].shelf.split(' ').join('').trim();
            console.log("Res:",res[i]);
            break;
          }
        }
      }    
      
      setBooks(res);

    }
    
  };

  useEffect(() => {    
    getBooksIdInShelves();
  }, []);

  const updateQuery = (query) => {
    setQuery(query);     
    getBooks();
  };

  console.log("Query:",books)



  console.log("Query Books:",books)

  const matchBooks =
    (query === "" )
      ? []
      : (books.length > 0) ? books : [];


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
            <li key={book.id}>
              <Book key={book.id} bookInfo={book} onMoveBook={onMoveBook} />
            </li>
          ))}
        </ol>

      </div>
    </div>
  );
};

export default SearchBooks;

SearchBooks.propTypes = {
  onMoveBook: PropTypes.func.isRequired
};
