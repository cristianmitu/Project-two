import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './pages/Search';
import About from './pages/About';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
// import logo from './logo.svg';
import './App.css';
// import SearchBar from './components/searchbar';

function App() {
  return (

    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Search/>} />
          <Route path="/about" element={<About/>} />

          
      </Routes>
    </Router>

    <div className="App">
      {/* <SearchBar></SearchBar> */}
      <h2>MOVIE TITLE</h2>
      <img src="www.getlinkfromapiconnection.com" alt="example"></img>

     <h1> Test </h1>

    </div>

  );
}

export default App;
