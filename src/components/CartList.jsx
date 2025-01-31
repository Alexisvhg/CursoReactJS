import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function CartList({items}) {
    return (
        <ListGroup className='w-50'>
            {items.map((item,index) => (
                <ListGroup.Item className='d-flex justify-content-between' key={index}>
                    {item.Nombre} x {item.quantity} ${item.Precio}
                    <Button variant='danger'>Remover</Button>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default CartList