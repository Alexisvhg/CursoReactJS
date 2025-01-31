import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import ItemList from './ItemList';
import { getProducts, getProductsByTipo } from '../firebase/db';

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const {id} = useParams ()

  useEffect(() => {  
      if(id){
        getProductsByTipo(id)
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
