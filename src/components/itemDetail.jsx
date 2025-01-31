import ItemCount from './ItemCount';

function ItemDetail ({ item }) {
    return ( 
    <div>
    <img src={item?.imagen} alt= {item?.Nombre} />
    <h2>{item?.Nombre}</h2>
    <p>{item?.Descripcion}</p>
    <p>{item?.id}</p>
    <ItemCount item={item} />
    </div>
    )
}

export default ItemDetail