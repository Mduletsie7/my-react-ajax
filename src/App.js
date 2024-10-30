import './App.css';
import Header from './components/Header';
import UserList from './components/product';
import MediaControlCard from './components/card';

// axios.get('https://dummyjson.com/products').then(response => [console.log(response.data)])
// .catch(error => {console.error(error)})

function App() {
  return (
    <div className="App">
      <Header />
      <h1>User List from AXIOS API</h1>
      <UserList />
      {/* <MediaControlCard /> */}
    </div>
  );
}

export default App;
