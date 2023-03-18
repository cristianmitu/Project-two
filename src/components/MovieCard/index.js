import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieCard() {
  return (
    <Card style={{ width: '18rem' ,margin:'5px',display:'flex',}}>
      <Card.Title style={{display:'flex',justifyContent:'center'}}>Movie Name</Card.Title>
      <Card.Img variant="top" src="holder.js/100px180" style={{display:'flex',justifyContent:'center'}} />
      <Card.Body style={{display:'flex',flexDirection:'column'}}>
        {/* <Card.Title style={{display:'flex',justifyContent:'center'}}>Movie Name</Card.Title> */}
        <Button variant="primary">Rate Movie</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;