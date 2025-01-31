import { CartContext } from "./CartContext";
import { useState } from "react";

export default function CartProvider({children}) {
const [cart, setCart] = useState([]);

    const addToCart = (item) => {
       const isInCart= cart.some(prod =>prod.id === item.id);

       if(!isInCart) return (setCart([...cart, item]))

        alert('El producto fue agregado al carrito');
    }

    const getQty = () => {
     const cantidades = cart.map(item => item.quantity);
     const cantidadTotal = cantidades.reduce((acc, current) => acc + current, 0);
     return cantidadTotal;
    }

    const getTotal = () => {
        const totales = cart.map(item => item.quantity * item.Precio);
        const total = totales.reduce((acc, current) => acc + current, 0);
        return total;
    }

    const clearCart = () => {
        setCart([]);
    }

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    }

    return(
        <CartContext.Provider value={{cart, addToCart, getQty, getTotal, clearCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}