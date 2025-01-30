import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { CartContext } from '../context/CartContext';
import ItemList from './ItemList';
import { getProducts, getProductsByCategory } from '../firebase/db';

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const {id} = useParams ()
  const cart = useContext(CartContext);

  useEffect(() => {  
      if(id){
        getProductsByCategory(id)
        .then(res => setItems(res))
      }else {
        getProducts()
        .then(res => setItems(res))
      }
    }, [id]);

  return (
    <ItemList items={items} />
  );
}

export default ItemListContainer;
