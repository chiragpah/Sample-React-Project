import { useSelector } from 'react-redux';
import './App.css';
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated)
  return (
    <div className="App">
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </div>
  );
}

export default App;
