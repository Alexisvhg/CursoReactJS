import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartList({items}) {
    const { removeItem } = useContext(CartContext)

    return (
        <ListGroup className='w-50'>
            {items.map((item,index) => (
                <ListGroup.Item className='d-flex justify-content-between' key={index}>
                    {item.Nombre} x {item.quantity} ${item.Precio}
                    <Button variant='danger' onClick={() => removeItem(item.id)}>
                        Remover
                    </Button>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default CartList