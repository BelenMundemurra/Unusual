import React from 'react';
import { useCartContext } from '../context/CartContext';
import {Link} from 'react-router-dom';
import ItemCart from './ItemCart';

const Cart = () => {
    
    const {cart,totalPrice, clearCart} = useCartContext();

    //Si el carrito (cart) no contiene productos
    if (cart.length === 0) {
        return (
            <>
            <div className='empty-cart'>
                <p className='cat_title'>CARRITO DE COMPRAS</p>
                <p className='empty-text-cart'>El carrito de compras no tiene productos</p>
                <div>
                    <Link className='btn_tran btn_cart' to='/category/shop'>IR A LA TIENDA</Link>
                </div>
            </div>
            </>
        );
    } else {
        //El carrito (cart) contiene productos
        return (
            <>
            <div className='list-cart'>
                    <p className='cat_title'>CARRITO DE COMPRAS</p>
                    <div className='cart-info'>
                        {cart.map(item => <ItemCart key={item.item.id} product={item}/>)}
                    </div>
                    <p className='price-cart'>PRECIO TOTAL : ${totalPrice()}</p>  
                    <div className='btn-cart'>
                        <button className='btn_tran' onClick={clearCart}>Vaciar Carrito</button>
                        <Link className='btn_tran btn_cart_end' to='/checkout'>Finalizar compra</Link>
                    </div>
            </div>
            </>
        )
    }
}

export default Cart;
