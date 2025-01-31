import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


function CartWidget() {
  const { getQty } = useContext(CartContext);
  return (
    <Link to="/cart" className='text-white text-decoration-none'> 
     Carrito {getQty()}
    </Link>
  );
}

export default CartWidget;