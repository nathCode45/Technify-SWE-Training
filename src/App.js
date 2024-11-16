import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'
import Basketball from './Basketball';
import Soccer from './MSoccer';
import Football from './Football';
import DukeWSoccer from './WSoccer';
//import file for your sport here

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basketball" element = {<Basketball/>}/>
        {/* Import the page for your sport and add its path here & update the path name on Home if it doesn't match the one already created */}
        <Route path="/mens_soccer" element={<Soccer />} />
        <Route path="/football" element={<Football />}/>
        <Route path='/womens_soccer' element={<DukeWSoccer/>}  />
      </Routes>
    </Router>
  );
}

export default App;
