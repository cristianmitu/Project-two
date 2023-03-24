import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Rating(props) {
  
    const [rating, setRating] = useState(0)

    const handleInputChange = (event) => {
    const { value } = event.target;
    setRating(() => (value));
      };
    
    const movieDataBaseKey = "79a50b21902c8d9bd27a20543dc2f4c5";

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(rating);
        fetch("https://api.themoviedb.org/3/authentication/guest_session/new?api_key=" + movieDataBaseKey)
            .then(response => response.json())
            .then(guestSession => {
                console.log(guestSession.guest_session_id);
                let guestSessionId = guestSession.guest_session_id;
                fetch("https://api.themoviedb.org/3/movie/" + props.id + "/rating?api_key=" + movieDataBaseKey + "&guest_session_id=" + guestSessionId, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "value": 8.5
                    }),
                })
            .then(response => response.json())
            .then(newData => {
            console.log(newData);
            console.log(props.id);     
            })})}
  
  return (
    <form onSubmit={handleSubmit}>
    <Form.Select onChange={handleInputChange} aria-label="Default select example">
      <option>Give your movie rating</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      <option value="4">Four</option>
      <option value="5">Five</option>
      <option value="6">Six</option>
      <option value="7">Seven</option>
      <option value="8">Eight</option>
      <option value="9">Nine</option>
      <option value="10">Ten</option>

    </Form.Select>
    <Button variant="primary" type="submit" id="submitRating">Submit</Button>{' '}
    </form>
  );
  }

export default Rating;