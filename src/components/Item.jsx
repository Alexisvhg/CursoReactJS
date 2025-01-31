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
      <Card.Title>{item.Nombre}</Card.Title>
      <Card.Text>
        {item.Descripcion}
      </Card.Text>
      <Card.Text>
        {item.Tipo}
      </Card.Text>
      <Card.Text>
        {item.Precio}
      </Card.Text>
      <Button variant="primary" as={Link} to={`/item/${item.id}`}>Ver Detalle</Button>
    </Card.Body>
    </Card>
  </Col>
  )
}

export default Item;