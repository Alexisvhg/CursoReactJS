
function ItemListContainer({bg,cl,estilo,tm}) {
  return (
  
    <div><ul style={{backgroundColor: bg ,color: cl,fontStyle: estilo,fontSize: tm}}>
    <li>ESCUDO 1</li>
    <li>BANDERA</li>
    <li>COPA</li>
    <li>CAMISETA</li>
  </ul></div>
  );
}



export default ItemListContainer;
