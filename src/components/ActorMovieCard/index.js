// import { Modal } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ActorMovieCard(props) {
  
  // console.log(MovieCard.props);

  return (
    <Card style={{ width: '18rem' ,margin:'5px',display:'flex',padding:'5px'}}>
      <Card.Title style={{display:'flex',justifyContent:'center'}}>{props.title}</Card.Title>
      <Card.Img variant="top" src={props.poster_path} style={{display:'flex',justifyContent:'center'}} />
      <Card.Body style={{display:'flex',flexDirection:'column'}}>
        <Button id={props.value} variant="primary" style={{margin:'1px',padding:'1px'}}>Movie Info</Button>
      </Card.Body>
    </Card>

  );
}

export default ActorMovieCard;