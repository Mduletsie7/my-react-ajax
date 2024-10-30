import './App.css';
import UserList from './components/product';

// axios.get('https://dummyjson.com/products').then(response => [console.log(response.data)])
// .catch(error => {console.error(error)})

function App() {
  return (
    <div className="App">
      <h1>User List</h1>
      <UserList />
    </div>
  );
}

export default App;
