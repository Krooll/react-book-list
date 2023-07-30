import { useState } from 'react';
import shortid from 'shortid';
import BookForm from './components/BookForm/BookForm';
import BookHeader from './components/BookHeader/BookHeader';
import BookList from './components/BookList/BookList';

const App = () => {
  const [books, setBooks] = useState([
    { id:1, title: 'The Witcher', author: 'Andrzej Sapkowski' },
    { id:2, title: 'Java od podstaw', author: 'Marcin Moskala' },
    { id:3, title: 'Aplikacje Webowe', author: 'Michał Sułkowski' },
    { id:4, title: 'React', author: 'Karol Maj' },
    { id:5, title: 'Heavy Rain', author: 'Thomas Carol' },
    { id:6, title: 'Resident Evil', author: 'Carol Morris' },
    { id:7, title: 'Harry Potter', author: 'J.K Rowling' },
    { id:8, title: 'The Las of Us', author: 'Neil Druckmann' },
    { id:9, title: 'Batman', author: 'DC Comics' },
    { id:10, title: 'Hallo', author: 'Joe Doe' },
    { id:11, title: 'Trailer Boys', author: 'Rick' }
  ]);

  const removeBook = bookId => {
    setBooks(books.filter(book => book.id !== bookId));
  };

  const addBook = newBook => {
    setBooks([...books, { id: shortid(), title: newBook.title, author: newBook.author }]);
  };

  return (
    <div>
      <BookHeader></BookHeader>
      <BookList removeBook={removeBook} books={books}></BookList>
      <BookForm addBook={addBook}></BookForm>
    </div>
  );
}

export default App;
