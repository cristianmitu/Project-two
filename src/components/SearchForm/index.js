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

import "./style.css"; 

function SearchForm() {  
  return (
    <div className="container" id="searchForm">
      <h2>Search for your favourite actor</h2>
      <InputGroup size="lg">

        <Form.Control
          
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>

      <Button variant="primary" type="submit">Search</Button>{' '}

    </>
    </form>

      <Button variant="primary" id="searchFormBtn">Search</Button>{' '}

    </div>

  );
}

