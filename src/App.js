import './App.css';
import Raof from './components/About/about';
import Form from './components/form';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <h1>
        Hello friends from App
      </h1>
      <Home/>
      <Form/>
      <Raof/>

    </div>
  );
}

export default App;

