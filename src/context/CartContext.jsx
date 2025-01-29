import { creatContext, useContext } from 'react';

export const CartContext = creatContext(null);

export const useCart = () => useContext(CartContext);