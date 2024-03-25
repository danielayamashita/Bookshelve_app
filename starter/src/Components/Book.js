import BookMenu from "./BookMenu";
import PropTypes from "prop-types";

const Book =  ({ bookInfo,onMoveBook }) => {
  
  const getBookShelf = () => {
    
    let shelf = "none";

    if (bookInfo.shelf != null) {
      shelf = bookInfo.shelf;
    }    
        
    return shelf;

  }

  
  const getThumbnail = () => {

    console.log("get thmbnail")
    if (bookInfo.hasOwnProperty("imageLinks"))
      if (bookInfo.imageLinks.hasOwnProperty("thumbnail"))
      {
        return  bookInfo.imageLinks.thumbnail
      }
      else
        return ""
    else
      return ""


  }

  return (
    <div className="book" key={`classname${bookInfo.id}`}>
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: 'url("' + getThumbnail()+ '")',
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

Book.propTypes = {
  bookInfo: PropTypes.object.isRequired,
  onMoveBook: PropTypes.func.isRequired
};