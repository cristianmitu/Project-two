import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function SearchForm() {
  
  const [state, setState] = useState("")

  const handleInputChange = (event) => {
    const { value } = event.target;
    setState(() => (value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
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
        <Form.Control
          
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <Button variant="primary" type="submit">Search</Button>{' '}

    </>
    </form>
  );
}

export default SearchForm;