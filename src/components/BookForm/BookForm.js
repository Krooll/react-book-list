import { useState } from "react";
import { useDispatch } from "react-redux";

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_BOOK', payload: {title,author} });
        setTitle('');
        setAuthor('');
    };

    return (
        <form onSubmit={handleSubmit}>
            Title: <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Add title..."></input>
            Author: <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="Add author..."></input>
            <button>Add book</button>
        </form>
    );
};

export default BookForm;