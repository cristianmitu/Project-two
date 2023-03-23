import axios from "axios";
import React, { useState, useEffect} from "react"
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ActorCard from "../components/ActorCard";
import '../components/MovieCard/style.css';
import ActorMovieCard from "../components/ActorMovieCard";
import RateMovieCard from "../components/RateMovieCard"
import MovieCard from "../components/MovieCard";
import Row from "../components/Row";
import "../components/MovieCard/style.css";
import Rating from "./../components/SubmitRating"

function Rate() {
    const location = useLocation();
    const movieIdForApi = location.state
    console.log(movieIdForApi);

    const movieDataBaseKey = "79a50b21902c8d9bd27a20543dc2f4c5";

    const [movie, setMovie] = useState([])

    useEffect(() => { 
        axios.get("https://api.themoviedb.org/3/movie/" + movieIdForApi + "?api_key=" + movieDataBaseKey + "&language=en-US")
        .then(function (response) {
              let movieData = response.data;
              setMovie(movieData) 
        
        })}, [movieIdForApi]);

    return (
        <div>

        <div>
        <RateMovieCard title={movie.title} poster_path={"https://image.tmdb.org/t/p/w200" + movie.poster_path} overview={movie.overview}/>
            
            <Rating id={movieIdForApi}/>
        </div>
        <div className="container" id="RateMovieCard">
        </div>
        </div>
    )
    
};
export default Rate;




