//import Form from 'react-bootstrap/Form';
//import InputGroup from 'react-bootstrap/InputGroup';
//import Button from 'react-bootstrap/Button';
//import "./style.css"; 

//function SearchForm() {  
  //return (
    //<div className="container" id="searchForm">
      //<h2>Search for your favourite actor</h2>
      //<InputGroup size="lg">
        //<Form.Control
          //aria-label="Large"
          //aria-describedby="inputGroup-sizing-sm"
        ///>
      //</InputGroup>
      //<Button variant="primary" id="searchFormBtn">Search</Button>{' '}

    //</div>
  //);
//}

//export default SearchForm;


import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="actor">Actor name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="actor"
          list="actors"
          type="text"
          className="form-control"
          placeholder="Type in an actor's name to begin"
          id="actor"
        />
        
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;