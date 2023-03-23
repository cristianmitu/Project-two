import axios from "axios";
import {useLocation} from 'react-router-dom';
import ActorCard from "../ActorCard";
import ActorMovieCard from "../ActorMovieCard";
import React, { useState, useEffect } from "react"
import SearchForm from "./../SearchForm"
import placeholder from "./../../No-Image-Placeholder.png";


function ActorSearch() {
    
    
    // console.log(MovieCard.props);


    const [actors, setActors] = useState([])

    const location = useLocation();
    const searchTerm = location.state
    const movieDataBaseKey = "79a50b21902c8d9bd27a20543dc2f4c5";

    useEffect(() => { 
      axios.get("https://api.themoviedb.org/3/search/person?api_key=" + movieDataBaseKey + "&language=en-US&query=" + searchTerm + "&page=1&include_adult=false")
        .then(function (response) {
            
            let actors = response.data.results;
            setActors(actors) 
            console.log(actors)
      
      })}, [searchTerm]);

      let actorMovies = [];
      let currentActorMovies = "";

      for (let i = 0; i < actors.length; i++) {      
        currentActorMovies = actors[i].known_for
        actorMovies.push(...currentActorMovies)    
        console.log(actorMovies);  
         
      }

      for (let i = 0; i < actors.length; i++) { 
        if(actors.profile_path !== null && typeof actorMovies[i].poster_path != "object" ) {
            actors[i].profile_path = "https://image.tmdb.org/t/p/w200" + actors[i].profile_path
        } else {
            actors[i].profile_path = "notFound"
        }
      }

      for (let i = 0; i < actorMovies.length; i++) {
        if (actorMovies[i].poster_path !== null && typeof actorMovies[i].poster_path != "object" ) {
            actorMovies[i].poster_path = "https://image.tmdb.org/t/p/w200" + actorMovies[i].poster_path
            console.log(actorMovies[i].poster_path);
        } else {
            actorMovies[i].poster_path = "notFound"
        }
      }

      return ( 
            <div className="row" id="ActorSearch">
            <SearchForm />
            
            {searchTerm !== null && <h2>Actors</h2> }
                {actors.map((actor, i) => (
                    searchTerm !== null &&
                        <ActorCard
                            key={actor.id}
                            name={actor.name}
                            profile_path={actor.profile_path}
                            value={i}
                        /> 
                    ))}
            
            {searchTerm !== null && <h2>Movies</h2> }
                {actorMovies.map((film, i) => (
                    searchTerm !== null &&
                    <ActorMovieCard
                        key={film.id}
                        id={film.id}
                        title={film.title}
                        poster_path={film.poster_path}
                        value={film.id}
                    /> 
                ))}
                
            </div>
        )

    }

export default ActorSearch;