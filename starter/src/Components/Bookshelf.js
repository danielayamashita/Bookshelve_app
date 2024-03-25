import Book from "./Book";
import PropTypes from "prop-types";

const Bookshelf = ({ typeBookshelf,books, onMoveBook }) => { 


  const showingBooks = books.filter((b) => 
    0 === b.shelf.trim().toLowerCase().localeCompare(typeBookshelf.split(' ').join('').trim().toLowerCase()));


  return (
    <div key={typeBookshelf} className="bookshelf">
      <h2 className="bookshelf-title"  key={'title_'+{typeBookshelf}}>{typeBookshelf}</h2>
      <div key={"bookshelf_"+{typeBookshelf}} className="bookshelf-books">
        <ol className="books-grid">
          {showingBooks.map((book) => (
            <li key={`bookItem${book.id}`}>              
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

Bookshelf.propTypes = {
  typeBookshelf: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onMoveBook: PropTypes.func.isRequired
};
