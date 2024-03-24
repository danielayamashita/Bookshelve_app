import {Link} from "react-router-dom";

const SearchNewBook = () => {
  return (
    <div className="open-search">
      <Link className="close-search" to="/search">
      Add a book
      </Link>
      
    </div>
  );
};

export default SearchNewBook;
