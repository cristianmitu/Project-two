import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import "./style.css";
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
    console.log(state);
    navigate('./../../results',{state:state});
  };
  return (
    <div>
      <div className="container" id="searchForm">
        <h2>Search for your favourite actor</h2>
        <form onSubmit={handleSubmit}>
        <>
          <InputGroup size="lg"
            type="text"
            name="actorSearch"
            value={state}
            onChange={handleInputChange}
          >
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
          <Button variant="primary" type="submit" id="searchFormBtn">Search</Button>{' '}
          </>
        </form>
      </div>
    </div>
  );
}