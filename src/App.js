import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'
import Basketball from './Basketball';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basketball" element = {<Basketball/>}/>
      </Routes>
    </Router>
  );
}

export default App;
