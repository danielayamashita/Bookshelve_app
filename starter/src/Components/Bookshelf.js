import Book from "./Book";
import { useState } from "react";

const Bookshelf = ({ typeBookshelf,books }) => {

  const [bookInBookshelf,setBookInBookshelf] = useState(0);

  
  
  console.log(books);
  return (
    <div key={typeBookshelf} className="bookshelf">
      <h2 className="bookshelf-title"  key={'title_'+{typeBookshelf}}>{typeBookshelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li>
              <Book key={book.previewLink} 
              bookInfo={book}/>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
