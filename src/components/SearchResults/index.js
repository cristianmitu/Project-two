import React from "react";
import axios from "axios";
import "./style.css";

//function SearchResults(props) {
  //return (
    //<ul className="list-group search-results">
      //{props.results.map(result => (
        //<li key={result} className="list-group-item">
          //<img alt="Actor" src={result} className="img-fluid" />
        //</li>
      //))}
    //</ul>
  //);
//}

//export default SearchResults;


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

<<<<<<< HEAD
{/* {actors.map(actor => (
                        <MovieCard
                            key={actor.id}
                            name={actor.name}
                        /> 
                    ))} */}


// const Actors = async () => {
        
    //       const {data:response} = await axios.get("") //use data destructuring to get data from the promise object
          
    //     }
=======
export default ComponentB;


>>>>>>> d639056c88d636e860b9500184c915d6f3055c49
