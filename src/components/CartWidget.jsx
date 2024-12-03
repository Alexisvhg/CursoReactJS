function CartWidget() {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/34/34568.png"
        alt="Cart Icon"
        style={{ width: '80px' }}
      />
      <p
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
          margin: '0',
          padding: '2px 5px',
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '50%',
          fontSize: '20px',
          fontWeight: 'bold'
        }}
      >
        7
      </p>
    </div>
  );
}

export default CartWidget;
