
const BookMenu = ({book,currentBookshelf, onMoveBook}) => {

    const changeBookshelf = (shelf) => {
        
        console.log("Change book shelf")
        onMoveBook(book,shelf);
    }

    const getDefaultShelf = () => {
        return currentBookshelf.split(' ').join('').trim();
    }

    
    return (
        <div className="book-shelf-changer" >
            <select  defaultValue={getDefaultShelf} onChange={(event) => {changeBookshelf(event.target.value)}}>
                <option value="moveTo" disabled>
                Move to...
                </option>
                <option value="currentlyReading" >
                Currently Reading
                </option>
                <option value="wantToRead" >Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    );

}

export default BookMenu;