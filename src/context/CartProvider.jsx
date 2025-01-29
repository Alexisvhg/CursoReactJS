import { CartContext } from "./CartContext";
import { useState } from "react";

export default function CartProvider({children}) {
const [cart, setCart] = useState([]);

    const addToCart = item => {
        //completar con clase 6
    }

    const getQty = () => {
     //completar de anteultima con clase 6   
    }

    const getTotal = () => {
        const totales = cart.map(item => item.quantity * item.price);
        const total = totales.reduce((acc, current) => acc + curremt, 0);
        return total;
    }

    return(
        <CartContext.Provider value={{cart, addToCart, getQty, getTotal}}>
            {children}
        </CartContext.Provider>
    )
}
