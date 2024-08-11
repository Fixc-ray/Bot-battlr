import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Add from './components/Add';
import MyBots from './components/MyBots';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/my bots" element={<MyBots/>}/>
      </Routes>
    </div>
  );
}

export default App;
