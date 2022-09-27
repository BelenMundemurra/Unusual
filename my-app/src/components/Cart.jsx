import React from 'react';
import { useCartContext } from './context/CartContext';
import {Link} from 'react-router-dom';
import ItemCart from './ItemCart';

const Cart = () => {
    const {cart,totalPrice, clearCart} = useCartContext();
    
    if (cart.length === 0) {
        return (
            <>
            <p>Carrito vacio</p>
            <Link to='/category/shop'>Ir a la tienda</Link>
            </>
        );
    } else {
        return (
            <>
            {cart.map(item => <ItemCart key={item.item.id} product={item}/>)}
            <p>Precio total: {totalPrice()}</p>
            <button onClick={clearCart}>Vaciar Carrito</button>
            <Link to='/checkout'>Finalizar compra</Link>
            </>
        )
    }
}

export default Cart;
