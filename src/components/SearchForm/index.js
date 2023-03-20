
//import Form from 'react-bootstrap/Form';
//import InputGroup from 'react-bootstrap/InputGroup';
//import Button from 'react-bootstrap/Button';
//import "./style.css"; 

import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import {Link, useNavigate} from 'react-router-dom';

export default function SearchForm(props) {
  
  const navigate = useNavigate();

  const [state, setState] = useState("")

  const handleInputChange = (event) => {
    const { value } = event.target;
    setState(() => (value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // window.location.href = "http://localhost:3000/results"
    console.log(state);
    // props.actor = state;
    navigate('./../../results',{state:state});

  };
  
  return (
    <form onSubmit={handleSubmit}>
    <>
      <InputGroup size="lg"
          type="text"
          name="actorSearch"
          value={state}
          onChange={handleInputChange}
      >



 // function SearchForm() {  
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
//</InputGroup>}

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

    <div className="container" id="searchForm">
      <h2>Search for your favourite actor</h2>
      <InputGroup size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <Button variant="primary" id="searchFormBtn">Search</Button>{' '}

    </div>


  );
}

