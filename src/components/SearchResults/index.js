import React from "react";

import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          <img alt="Actor" src={result} className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;

import {useLocation} from 'react-router-dom';

 function ComponentB() {

    const location = useLocation();
   
        return (

            <>
               
<div>{location.state.name}</div>

            </>
        )
    }

export default ComponentB;

