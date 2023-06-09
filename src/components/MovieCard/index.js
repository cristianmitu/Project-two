// import { Modal } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieCard(props) {
  
  // console.log(MovieCard.props);

  return (
  
    <Card style={{ width: '18rem' ,margin:'5px',padding:'5px'}}>
      <Card.Title style={{display:'flex',justifyContent:'center'}}>{props.name}</Card.Title>
      <Card.Img variant="top" src="holder.js/100px180" style={{display:'flex',justifyContent:'center'}} />
      <Card.Body style={{display:'flex',flexDirection:'column'}}>
        {/* <Card.Title style={{display:'flex',justifyContent:'center'}}>Movie Name</Card.Title> */}
        <Button variant="primary" style={{margin:'1px',padding:'1px'}}>Rate Movie</Button>
        <Button variant="primary" style={{margin:'1px',padding:'1px'}}>Watch trailer</Button>        
      </Card.Body>
    </Card>
    
  );
}

export default MovieCard;