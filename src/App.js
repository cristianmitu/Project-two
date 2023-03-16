import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './pages/Search';
import About from './pages/About';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Search/>} />
          <Route path="/about" element={<About/>} />

          
      </Routes>
    </Router>
  );
}

export default App;
