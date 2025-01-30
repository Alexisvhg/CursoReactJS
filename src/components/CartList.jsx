import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function CartList({items}) {
    return (
        <ListGroup className='w-50'>
            {items.map(item => (
                <ListGroup.Item className='d-flex justify-content-between' key={item.id}>
                    {item.title} x {item.quantity} ${item.price}
                    <Button variant='danger'>Remover</Button>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}