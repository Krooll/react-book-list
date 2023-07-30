import BookForm from './components/BookForm/BookForm';
import BookHeader from './components/BookHeader/BookHeader';
import BookList from './components/BookList/BookList';

const App = () => {
  return (
    <div>
      <BookHeader></BookHeader>
      <BookList></BookList>
      <BookForm></BookForm>
    </div>
  );
}

export default App;
