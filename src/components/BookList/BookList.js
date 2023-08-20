import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const BookList = () => {
    const searchBook = useSelector(state => state.searchBook);
    const books = useSelector(state => state.books.filter(book => book.title.toLowerCase().includes(searchBook.toLowerCase())));

    const dispatch = useDispatch();
    const removeBook = bookId => {
        dispatch({ type: 'REMOVE_BOOK', payload: bookId});
    }
    return (
        <ul>
            {books.map(book => <li key={book.id}>{book.title} by {book.author} <button onClick={() => removeBook(book.id)}>Remove</button></li>)}
        </ul>
    );
};

export default BookList;