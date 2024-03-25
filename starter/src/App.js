import "./App.css";
import { useState, useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import SearchBooks from "./Components/SearchBooks";

import * as BooksAPI from "./BooksAPI";
import ListBooks from "./Components/ListBooks";

function App() {

  const [shelfCurrentReading, setShelfCurrentReading] = useState([]);
  
  const [shelfWantToRead, setShelfWantToRead] = useState([]);
  
  const [shelfRead, setShelfRead]= useState([]);

  const organizeShelf = (myBooks)=> {
    console.log("myBooks",myBooks);
    let booksCurrentlyReading = [];
    let booksWantToRead = [];
    let booksRead = []
    for (let i=0; i < myBooks.length; i++){
      if (0 === myBooks[i].shelf.localeCompare("currentlyReading")){    
        booksCurrentlyReading = booksCurrentlyReading.concat(myBooks[i]);

      }
      else if (0 === myBooks[i].shelf.localeCompare("wantToRead")){  
        booksWantToRead = booksWantToRead.concat(myBooks[i]);
      }
      else if (0 === myBooks[i].shelf.localeCompare("read")){

        booksRead = booksRead.concat(myBooks[i]);
      }           
    }    
    
    setShelfCurrentReading(booksCurrentlyReading);
    setShelfWantToRead(booksWantToRead);
    setShelfRead(booksRead);    

  }

 

  const moveBook = async (book,bookshelf) => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      organizeShelf(res);
  
    };
    await BooksAPI.update(book, bookshelf); 
    console.log(bookshelf)
    getBooks();
  };

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      organizeShelf(res);
  
    };
    getBooks(); 
  },[])


  return (
    
    <div className="app">
      

      <Routes>
        <Route 
        exact
        path="/"
        element={<ListBooks booksCurrentlyReading={shelfCurrentReading} 
        booksWantToRead={shelfWantToRead} 
        booksRead={shelfRead} 
        onMoveBook={moveBook}/>}/> 

        <Route 
        path="/search"
        element={<SearchBooks onMoveBook={moveBook}/>}/>

      </Routes>

    </div>

  );
}

export default App;
