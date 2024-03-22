
const BookMenu = ({currentBookshelf, onMoveBook}) => {
    console.log(currentBookshelf);
    return (
        <div className="book-shelf-changer" >
            <select  defaultValue={currentBookshelf} onChange={onMoveBook}>
                <option value="none" disabled>
                Move to...
                </option>
                <option value="Currently Reading" >
                Currently Reading
                </option>
                <option value="Want to Read" >Want to Read</option>
                <option value="Read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    );

}

export default BookMenu;