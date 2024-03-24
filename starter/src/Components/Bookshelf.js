import Book from "./Book";
import { useState} from "react";

const Bookshelf = ({ typeBookshelf,books, onMoveBook }) => { 

  // const [showingBooks, setShowingBooks] = useState(books);

  
  // useEffect(() => {
  //   var listBooks;
  //   listBooks = books.filter((b) => 
  //   0 === b.shelf.trim().toLowerCase().localeCompare(typeBookshelf.split(' ').join('').trim().toLowerCase()));

  //   // console.log(listBooks);
  //   setShowingBooks(listBooks); 
    
  // },[])

  const showingBooks = books.filter((b) => 
    0 === b.shelf.trim().toLowerCase().localeCompare(typeBookshelf.split(' ').join('').trim().toLowerCase()));


  return (
    <div key={typeBookshelf} className="bookshelf">
      <h2 className="bookshelf-title"  key={'title_'+{typeBookshelf}}>{typeBookshelf}</h2>
      <div key={"bookshelf_"+{typeBookshelf}} className="bookshelf-books">
        <ol className="books-grid">
          {showingBooks.map((book) => (
            <li>              
              <Book key={book.id} 
              bookInfo={book}
              onMoveBook={onMoveBook}/>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
