
import './App.css';
import Header from './components/Header';

// import Signup from './components/Signup'
import StateLogin from './components/StateLogin';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* <Signup /> */}
        <StateLogin />
      </main>
    </div>
  );
}

export default App;
