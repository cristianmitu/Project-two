import React from "react";
import axios from "axios";
import {useLocation} from 'react-router-dom';
import MovieCard from "../MovieCard";


function ActorSearch() {
    
    const location = useLocation();
    const searchTerm = location.state
    
    const movieDataBaseKey = "79a50b21902c8d9bd27a20543dc2f4c5";

    axios.get("https://api.themoviedb.org/3/search/person?api_key=" + movieDataBaseKey + "&language=en-US&query=" + searchTerm + "&page=1&include_adult=false")
        .then(function (response) {
          // handle success
          console.log({response});

        })
}

function SearchResults() {
   
    return (
        <>
            {ActorSearch()}
            <MovieCard />

        </>
    )
}

export default SearchResults;