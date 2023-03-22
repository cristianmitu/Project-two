
import React, { useState} from "react"
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ActorCard from "../components/ActorCard";
import '../components/MovieCard/style.css';
import ActorMovieCard from "../components/ActorMovieCard";
import MovieCard from "../components/MovieCard";
import Row from "../components/Row";
import "../components/MovieCard/style.css";


function Rate() {
    
    const location = useLocation();
    const searchTerm = location.state
    console.log(searchTerm);

    return (

       
    <div className="container" id="RateMovieCard">
        <h2>{searchTerm}</h2>
        <h3>Test</h3>
        <MovieCard/>        
     </div>       

    )
};

export default Rate;


