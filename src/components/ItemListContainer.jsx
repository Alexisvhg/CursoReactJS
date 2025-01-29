import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { getProducts } from '../firebase/db';

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const {category} = useParams ()
  useEffect(() => {  
      if(category){
        getProducts(category)
        .then(res => setItems(res))
      }else {
        getProducts()
        .then(res => setItems(res))
      }
    }, [category]);

  return (
    <ItemList items={items} />
  );
}

export default ItemListContainer;
