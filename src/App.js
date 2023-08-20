import BookForm from './components/BookForm/BookForm';
import BookHeader from './components/BookHeader/BookHeader';
import BookList from './components/BookList/BookList';
import FindBook from './components/FindBook/FindBook';


const App = () => {

  return (
    <div>
      <BookHeader />
      <BookList />
      <FindBook />
      <BookForm />
    </div>
  );
}

export default App;
