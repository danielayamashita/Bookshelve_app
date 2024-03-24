import Bookshelf from "./Bookshelf";
import SearchNewBook from "./SearchNewBook";

const ListBooks = ({books,onMoveBook}) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf typeBookshelf={"Currently Reading"} books={books} onMoveBook={onMoveBook} />

          <Bookshelf typeBookshelf={"Want to Read"} books={books} onMoveBook={onMoveBook}/>

          <Bookshelf typeBookshelf={"Read"} books={books} onMoveBook={onMoveBook}/>

          <SearchNewBook onMoveBook={onMoveBook}/>
        </div>
      </div>
    </div>
  );
};

export default ListBooks;
