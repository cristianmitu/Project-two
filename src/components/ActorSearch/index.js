import axios from "axios";
import {useLocation} from 'react-router-dom';
import ActorCard from "../ActorCard";
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
            setActors(actors) 
            console.log(actors.length)
      
      })}, [searchTerm]);

      /* adult, gender, id, known_for, known_for_department, name, original_name, popularity, profile_path
*/
      for (let i = 0; i < actors.length; i++) {
        console.log(actors[i].name)
        
      }

      return ( 
            <>
                {actors.map((actor, i) => (
                        <ActorCard
                            key={actor.id}
                            name={actor.name}
                            profile_path={"https://image.tmdb.org/t/p/w200" + actor.profile_path}
                            value={i}
                        /> 
                    ))}
                {console.log(actors)}
            </>
        )

    }

export default ActorSearch;