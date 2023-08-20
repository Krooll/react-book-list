import { useState } from "react";
import { useDispatch } from "react-redux";

const FindBook = () => {
    const [searchTitle, setSearchTitle] = useState('');
    const dispatch = useDispatch();

    const searchBook = e => {
        e.preventDefault();
        dispatch({ type: 'FIND_BOOK', payload: searchTitle });
        setSearchTitle('');
    };

    return (
        <form onSubmit={searchBook}>
            Title: <input type="text" value={searchTitle} onChange={e => setSearchTitle(e.target.value)} placeholder="Book title..."></input>
            <button>Search book</button>
        </form>
    );
};

export default FindBook;
