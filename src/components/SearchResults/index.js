import React from "react";
import axios from "axios";
import {useLocation} from 'react-router-dom';
import MovieCard from "../MovieCard";
import ActorSearch from "../ActorSearch";

function SearchResults() {
    
    ActorSearch();
    console.log(ActorSearch.response);
    return (          
        <>
        <MovieCard name="test" />
        {/* <MovieCard name={actors[0].name} /> */}
            
        </>
    )}

export default SearchResults;

{/* {actors.map(actor => (
                        <MovieCard
                            key={actor.id}
                            name={actor.name}
                        /> 
                    ))} */}


// const Actors = async () => {
        
    //       const {data:response} = await axios.get("") //use data destructuring to get data from the promise object
          
    //     }