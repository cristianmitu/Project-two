// import { Modal } from 'bootstrap';
import {useNavigate} from 'react-router-dom';
import React, { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css';
import placeholder from "./../../No-Image-Placeholder.png"

function ActorMovieCard(props) {
  
    const navigate = useNavigate();
    const [movieId, _setMovieId] = React.useState(0)
    
    const myStateRef = React.useRef(movieId);

    const setMovieId = data => {
      myStateRef.current = data;
      _setMovieId(data);
      console.log(`state in handler: ${myStateRef.current}`);
      navigate('./../../rate',{state:myStateRef.current});
    };

  return (

    
    // <Card id={props.id} style={{ width: '18rem' ,margin:'5px',display:'flex',padding:'5px'}}>
    <div className='col-lg-4 col-md-4 col-sm-12 movieCards' id="movies">

    <div className='col-lg-4 col-md-4 col-sm-12 movieCards'>  
    <Card id={props.id} style={{ width: '18rem' ,margin:'5px',display:'flex',padding:'5px'}}/>
  

    <Card className='container-fluid col-lg-4 col-md-4 col-sm-12' id={props.id} style={{ width: '18rem' ,margin:'5px',display:'flex',padding:'5px'}}>
      <Card.Title style={{display:'flex',justifyContent:'center'}}>{props.title}</Card.Title>
      <Card.Img variant="top" src={props.poster_path == "notFound" ? placeholder: props.poster_path} style={{display:'flex',justifyContent:'center'}} />
      <Card.Body style={{display:'flex',flexDirection:'column'}}>
        <Button onClick={() => setMovieId(props.value)} id={props.value} variant="primary" style={{margin:'1px',padding:'1px'}}>Movie Info</Button>
      </Card.Body>
    </Card>
    </div>
    </div>

  );
}

export default ActorMovieCard;