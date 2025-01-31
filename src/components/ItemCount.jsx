import { useState, useContext } from 'react';
import  {CartContext} from '../context/CartContext';


function ItemCount ({ item }) {
    const [count, setCount] = useState(0);

    const {addToCart} = useContext(CartContext);

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleSubstract = () => {
        if(count != 0){
            setCount(count - 1);
        }
    }

    const handleAddToCart = () => {
        if(count != 0){
            addToCart({ ...item, quantity: count});
        }
        
    }

    return (
        <div>
            <p style= {{border: 'solid 1px white'}}>{count}</p>
            <button style={{backgroundColor: 'red'}} onClick={handleSubstract}>Restar</button>
            <button style={{backgroundColor: 'green'}} onClick={handleAdd}>Sumar</button>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount