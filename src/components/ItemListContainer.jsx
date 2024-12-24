import { useState, useEffect } from 'react';
import ItemList from './ItemList';

function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=811') 
      .then((res) => res.json())
      .then((res) => setItems(res.results))
      .catch((error) => console.error('Error de carga en lista', error));
  }, []);

  return (
    <ItemList items={items} />
  );
}

export default ItemListContainer;
