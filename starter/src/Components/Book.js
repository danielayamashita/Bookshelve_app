import BookMenu from "./BookMenu";
import { useState } from "react";

const Book = ({  bookInfo }) => {
  const [currentBookshelf, setCurrentBookshelf] = useState("Read");

  const moveBook = (bookshelf) => {
    setCurrentBookshelf(bookshelf);
  };



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

        <BookMenu currentBookshelf={currentBookshelf} onMoveBook={moveBook} />
      </div>
      <div className="book-title">{bookInfo.title}</div>
      <div className="book-authors">{bookInfo.authors}</div>
    </div>
  );
};

export default Book;
