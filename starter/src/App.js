import "./App.css";
import { useState, useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import SearchBooks from "./Components/SearchBooks";

import * as BooksAPI from "./BooksAPI";
import ListBooks from "./Components/ListBooks";

function App() {

  
  const [books, setBooks] = useState([])

  const [shelves, setShelves] = useState({"currentlyReading":[],
                                          "wantToRead": [],
                                          "read":[]})

  const organizeShelf = ()=> {
    console.log("OrganizeShelf");
    console.log(books)
    console.log("Hello");
    for (let i=0; i < books.length; i++){
      setShelves(shelves => ({
        ...shelves, // Keep the previous state of other shelves
        [books[i].shelf]: [...shelves.wantToRead, books[i]] // Update wantToRead with new value
      }))
      
      
    }

    console.log(shelves);

  }

  const moveBook = (book,bookshelf) => {

    BooksAPI.update(book, bookshelf); 
    console.log(bookshelf)
    // organizeShelf() 

  };

  const getBooks = async () => {
    const res = await BooksAPI.getAll();
    setBooks(res);

    
    console.log(res);
  };


  useEffect(() => {
    
    getBooks(); 

    organizeShelf();
    
      
  },[])


  return (
    <div className="app">
      <Routes>
        <Route 
        exact
        path="/"
        element={<ListBooks books={books} onMoveBook={moveBook}/>}/> 

        <Route 
        path="/search"
        element={<SearchBooks onMoveBook={moveBook}/>}/>

      </Routes>

    </div>

  );
}

export default App;
