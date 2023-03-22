// import { Modal } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css';
import { useState } from "react"
import ActorMovieCard from '../ActorMovieCard';

function ActorCard(props) {
  
  // const [showComponent, setShowComponent] = useState(false);

  // const handleClick = () => setShowComponent(!showComponent)

  // console.log(MovieCard.props);

  return (
    <div className='col-lg-4 col-md-4 col-sm-12 movieCards'>
    <Card style={{ width: '18rem' ,margin:'5px',padding:'5px',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Card.Title style={{display:'flex',alignItems:'center',justifyContent:'center'}}>{props.name}</Card.Title>
      <Card.Img variant="top" src={props.profile_path} style={{display:'flex',justifyContent:'center'}} />
      <Card.Body style={{display:'flex',flexDirection:'column'}}>
        <Button id={props.value} variant="primary" style={{margin:'1px',padding:'1px'}}>Show Movies</Button>
      </Card.Body>
    </Card>

    {/* {showComponent && <ActorMovieCard />
    
    {actors.map((actor, i) => (
                        <ActorCard
                            key={actor.id}
                            name={actor.name}
                            profile_path={"https://image.tmdb.org/t/p/w200" + actor.profile_path}
                            value={i}
                        /> 
                    ))}
    
    } */}
    
    </div>

  );
}

export default ActorCard;