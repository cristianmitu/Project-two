// import { Modal } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css';
// import {useNavigate} from 'react-router-dom';
import React, { useState } from "react"
import ActorMovieCard from '../ActorMovieCard';
import MovieCard from '../MovieCard';
import placeholder from "./../../No-Image-Placeholder.png"


function ActorCard(props) {
  
  // const [showComponent, setShowComponent] = useState(false);

  // const handleClick = () => setShowComponent(!showComponent)

  // console.log(MovieCard.props);

  // const navigate = useNavigate();
  const [actorId, _setActorId] = React.useState(0)
    
  const actorRef = React.useRef(actorId);

  const setActorId = data => {
    actorRef.current = data;
    _setActorId(data);
    console.log(`state in handler: ${actorRef.current}`);
  };

  return (
    <div className='col-lg-4 col-md-4 col-sm-12 movieCards'>
    <Card style={{ width: '18rem' ,margin:'5px',padding:'5px',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Card.Title style={{display:'flex',alignItems:'center',justifyContent:'center'}}>{props.name}</Card.Title>
      <Card.Img variant="top" src={props.profile_path == "https://image.tmdb.org/t/p/w200https://image.tmdb.org/t/p/w200null" ? placeholder: props.profile_path} style={{display:'flex',justifyContent:'center'}} />
      <Card.Body style={{display:'flex',flexDirection:'column'}}>
        <Button onClick={() => setActorId(props.value)} id={props.value} variant="primary" style={{margin:'1px',padding:'1px'}}>Show Movies</Button>
      </Card.Body>
    </Card>

    {/* {showComponent && <ActorMovieCard /> */}
    
    
    </div>

  );
}

export default ActorCard;