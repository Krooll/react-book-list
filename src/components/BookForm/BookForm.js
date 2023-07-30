import { useState } from "react";

const BookForm = ({addBook}) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addBook({ title: title, author: author});
        setTitle('');
        setAuthor('');
    };

    return (
        <form onSubmit={handleSubmit}>
            Title: <input value={title} onChange={e => setTitle(e.target.value)}></input>
            Author: <input value={author} onChange={e => setAuthor(e.target.value)}></input>
            <button>Add book</button>
        </form>
    );
};

export default BookForm;