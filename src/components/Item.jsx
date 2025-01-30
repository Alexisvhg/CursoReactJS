import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router';


function Item ({item}){

return(
<Col >
    <Card style={{ width: '18rem' }} >
    <Card.Img variant="top" src={item.imagen} />
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Button variant="primary" as={Link} to={'/item/${item.id}'}>{item.nombre}</Button>
    </Card.Body>
    </Card>
  </Col>
  )
}

export default Item;
