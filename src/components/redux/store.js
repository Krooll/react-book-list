import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

const reducer = (state, action) => {
    switch (action.type) {
        case 'REMOVE_BOOK': 
            return { ...state, books: state.books.filter(book => book.id !== action.payload)};
        case 'ADD_BOOK':
            return {...state, books: [...state.books, {...action.payload, id:shortid() }]};
        case 'FIND_BOOK':
            return {...state, searchBook: action.payload };
        default:
            return state;
    }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;