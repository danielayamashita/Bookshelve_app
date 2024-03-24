import { useState, useEffect } from "react";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";

const SearchBooks = ({onMoveBook}) => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  const getBooks = async () => {

    if (query !== "")
    {
      const res = await BooksAPI.search(query, 10);   
  
      setBooks(res);
    }
    
  };

  useEffect(() => {    
    getBooks();
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
