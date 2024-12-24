import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Item from './Item';


function ItemList({items}){
return(
<Container>
      <Row>
        {items.map((item, index) => <Item item={item} key={index}/> 
               )}
      </Row>
    </Container>
    )
}

export default ItemList