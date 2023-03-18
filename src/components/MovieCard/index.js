import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Movie Name</Card.Title>
        <Button variant="primary">Rate Movie</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;