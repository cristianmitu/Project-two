// import { Modal } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css';

function RateMovieCard(props) {
  
  // console.log(MovieCard.props);

  return (
  
    <Card id="RateMovieCard" style={{ width: '18rem', margin:'5px', padding:'5px'}}>
      <Card.Title style={{display:'flex',justifyContent:'center'}}>{props.title}</Card.Title>
      <Card.Img variant="top" src={props.poster_path} style={{display:'flex',justifyContent:'center'}} />
      <Card.Body style={{display:'flex',flexDirection:'column'}}>
        {/* <Card.Title style={{display:'flex',justifyContent:'center'}}>Movie Name</Card.Title> */}
                {props.overview}
      </Card.Body>
    </Card>
    
  );
}

export default RateMovieCard;