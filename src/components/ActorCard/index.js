// import { Modal } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ActorCard(props) {
  
  // console.log(MovieCard.props);

  return (
    <Card style={{ width: '18rem' ,margin:'5px',display:'flex',padding:'5px'}}>
      <Card.Title style={{display:'flex',justifyContent:'center'}}>{props.name}</Card.Title>
      <Card.Img variant="top" src={props.profile_path} style={{display:'flex',justifyContent:'center'}} />
      <Card.Body style={{display:'flex',flexDirection:'column'}}>
        <Button id={props.value} variant="primary" style={{margin:'1px',padding:'1px'}}>Show Movies</Button>
      </Card.Body>
    </Card>

  );
}

export default ActorCard;