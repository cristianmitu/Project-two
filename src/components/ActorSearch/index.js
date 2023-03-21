import axios from "axios";
import {useLocation} from 'react-router-dom';
import MovieCard from "../MovieCard";
import { useState, useEffect } from "react"

function ActorSearch() {
    
    const [actors, setActors] = useState([])

    const location = useLocation();
    const searchTerm = location.state
    const movieDataBaseKey = "79a50b21902c8d9bd27a20543dc2f4c5";

    useEffect(() => { 
      axios.get("https://api.themoviedb.org/3/search/person?api_key=" + movieDataBaseKey + "&language=en-US&query=" + searchTerm + "&page=1&include_adult=false")
        .then(function (response) {
            
            let actors = response.data.results;
            console.log(actors);

            setActors(actors) 

      
      })}, [searchTerm]);


      return ( 
            <>
                {actors.map(actor => (
                        <MovieCard
                            key={actor.id}
                            name={actor.name}
                        /> 
                    ))}
                {console.log(actors)}
            </>
        )

    }

export default ActorSearch;