import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ActorCard from "../components/ActorCard";
import '../components/MovieCard/style.css';
import ActorMovieCard from "../components/ActorMovieCard";
import MovieCard from "../components/MovieCard";
import Row from "../components/Row";
import "../components/MovieCard/style.css";

function Rate() {
    return (
    <div className="container" id="RateMovieCard">
        
        <MovieCard/>
        
    </div>       
    )
};

export default Rate;


