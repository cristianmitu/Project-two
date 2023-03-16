import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './pages/Search';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
      <Footer />
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
