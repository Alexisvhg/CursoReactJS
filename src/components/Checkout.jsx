import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCart } from '../context/CartContext';
import { creatOrder } from '../firebase/db';
import { serverTimestamp } from 'firebase/firestore';
import { Link, useNavigate  } from 'react-router';



function Checkout () {
    const { cart, getTotal, clearCart } = useCart();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const [name, email, phone] = form;

        const order = {
            buyer: {
                name: name.value,
                email: email.value,
                phone: phone.value
            },
            items: cart,
            date: serverTimestamp(),
            total: getTotal()
        }

        creatOrder(order);
        clearCart();
        if (window.confirm('Compra creada con éxito.')) {
            navigate('/');
            }
    }

    return (
        <div className='d-flex align-items-center justify-content-center'>
            <Form className='w-25 mt-5' onSubmit={handleSubmit}>
                <h3 className='mb-5'>Complete con sus datos para finalizar la compra:</h3>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre completo" required />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control type="email" placeholder="ejemplo@ejemplo.com" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="text" placeholder="whatsapp" required />
                </Form.Group>
                
                <Button variant="dark" type="submit">
                    finalizar compra
                </Button>
            </Form>
        </div>
    )
}

export default Checkout;