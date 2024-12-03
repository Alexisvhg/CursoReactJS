
import CartWidget from './CartWidget';

function NavBar({label}) {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#427eff',
        color: 'white',
        }}>

      <h1>{label}</h1>

      <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '15px',
          fontSize: '50px' 
        }}>

        <li>FUTBOL</li>
        <li>BASEBALL</li>
        <li>HOCKEY</li>
        <li>INSTITUCIONAL</li>
        
      </ul>
      
      <CartWidget />
    
    </div>
  );
}


export default NavBar;
