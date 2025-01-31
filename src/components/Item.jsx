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
      <Card.Title>{item.nombre}</Card.Title>
      <Card.Text>
        {item.descripcion}
      </Card.Text>
      <Card.Text>
        {item.categoria}
      </Card.Text>
      <Card.Text>
        {item.precio}
      </Card.Text>
      <Button variant="primary" as={Link} to={'/item/id'}>Ver Detalle</Button>
      {/* cambiar el id de item por el id del document de firebase */}
    </Card.Body>
    </Card>
  </Col>
  )
}

export default Item;