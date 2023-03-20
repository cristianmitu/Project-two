import React from "react";
import SearchForm from "./../components/SearchForm"
import {useLocation} from 'react-router-dom';



function Results() {
  
  const location = useLocation();

  return (
    <div>
      <h2>{}Results</h2>
      <div>{location.state}</div>

    </div>
  )
}

export default Results