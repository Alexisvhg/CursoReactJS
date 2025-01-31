import ItemCount from './ItemCount';

function ItemDetail ({ item }) {
    return ( 
    <div>
    <img src={item?.imagen} alt= {item?.nombre} />
    <h2>{item?.nombre}</h2>
    <p>{item?.descripcion}</p>
    <ItemCount item={item} />
    </div>
    )
}

export default ItemDetail