import CartList from './CartList';
import Button from 'react-bootstrap/Button';
import { useCart } from '../context/CartContext';
import {Link} from 'react-router';

function Cart () {
    const { cart, getTotal } = useCart();

    if(cart.length === 0) {
        return(
            <div>
                <h2>El carrito está vacío</h2>
                <Button as={Link} to='/'>Volver al inicio</Button>
                
            </div>
        )
    }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
        <CartList items={cart}/>
        <p className='mt-3 fw-bold'>Total: $ {getTotal()}</p>
        <Button variant='dark' className='w-50' as={Link} to={`/checkout`}>Finalizar Compra</Button>
    </div>
  )}

  export default Cart