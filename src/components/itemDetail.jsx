import ItemCount from './ItemCount';

function ItemDetail ({ item }) {
    return ( 
    <div>
    <img src={item?.imagen} alt= {item?.Nombre} />
    <h2>{item?.Nombre}</h2>
    <p>{item?.Descripcion}</p>
    <p>$ {item?.Precio}</p>
    <p>Cantidad:<ItemCount item={item} /> </p> 
    </div>
    )
}

export default ItemDetail