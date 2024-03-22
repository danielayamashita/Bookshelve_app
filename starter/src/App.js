import "./App.css";
import { useState, useEffect} from "react";
import {Route, Routes,useNavigate} from "react-router-dom";
import SearchBooks from "./Components/SearchBooks";
import Bookshelf from "./Components/Bookshelf";
import SearchNewBook from "./Components/SearchNewBook";
import * as BooksAPI from "./BooksAPI";

function App() {

  const [showSearchPage, setShowSearchpage] = useState(false);

  const [books, setBooks] = useState([])

  const addBook = (book) => {
    setBooks(books.concat(book))
    console.log("addBook");
  }

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
      console.log(res);
    };
    getBooks();
    
  },[])


  return (
    <div className="app">
      {showSearchPage ?
        (
          <SearchBooks />
        ) :
        (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf typeBookshelf={"Currently Reading"} books={books}/>

                <Bookshelf typeBookshelf={"Want to Read"} books={books}/>

                <Bookshelf typeBookshelf={"Read"} books={books}/>

                <SearchNewBook/>
                
              </div>
            </div>
          </div>
          
        )
      }
    </div>

  );
}

export default App;
