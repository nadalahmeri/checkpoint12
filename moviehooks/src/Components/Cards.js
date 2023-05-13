import React from 'react';
import {Card, Button} from 'react-bootstrap';


function Cards({movie}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img className='cardimg' variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          <p>{movie.description} </p>
          <h3> Movie rate: </h3>
          {movie.rate}
        </Card.Text>
        <Button variant="primary">Trailer</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;