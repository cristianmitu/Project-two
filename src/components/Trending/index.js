import React from "react";
import axios from "axios";
import MovieCard from "../MovieCard";
import "./style.css";

const movieDataBaseKey = "79a50b21902c8d9bd27a20543dc2f4c5";
function TrendingData() {
    return (
        axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=" + movieDataBaseKey)
        .then(function (response) {
        
            //handle success
                console.log(response);

        })
    ) 
   
}


function Trending() {
    return (
        <div className="row" id="TrendingContainer">
            <h2 style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Trending Movies</h2>
            {/* {TrendingData()} */}
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
    )
}

export default Trending;