import BookMenu from "./BookMenu";
import * as BooksAPI from "../BooksAPI";
import { useState, useEffect} from "react";

const Book =  ({ bookInfo,onMoveBook }) => {

  const [bookDetails, setBookDetails] = useState([]);

  
  const getBookShelf = () => {
    
    let shelf = "none";

    if (bookInfo.shelf != null) {
      shelf = bookInfo.shelf;
    }    
        
    return shelf;

  }

  

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: 'url("' + bookInfo.imageLinks.thumbnail+ '")',
          }}
        ></div>

        <BookMenu book={bookInfo} currentBookshelf={getBookShelf()} onMoveBook={onMoveBook} />
      </div>
      <div className="book-title">{bookInfo.title}</div>
      <div className="book-authors">{bookInfo.authors}</div>
    </div>
  );
};

export default Book;
