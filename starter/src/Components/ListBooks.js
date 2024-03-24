import Bookshelf from "./Bookshelf";
import SearchNewBook from "./SearchNewBook";

const ListBooks = ({booksCurrentlyReading,booksWantToRead,booksRead,onMoveBook}) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf typeBookshelf={"Currently Reading"} books={booksCurrentlyReading} onMoveBook={onMoveBook} />

          <Bookshelf typeBookshelf={"Want to Read"} books={booksWantToRead} onMoveBook={onMoveBook}/>

          <Bookshelf typeBookshelf={"Read"} books={booksRead} onMoveBook={onMoveBook}/>

          <SearchNewBook onMoveBook={onMoveBook}/>
        </div>
      </div>
    </div>
  );
};

export default ListBooks;
