import {React, createContext, useState} from 'react';

const CartContext = createContext();

const CartProvider = (props) => {
    const [Cart,setCart] = useState([]);

    const addItem = (Item) => {
        const auxCart = Cart
        auxCart.push(Item)
        setCart(auxCart)
    }

    const removeItem = (Item) => {
        const auxCart = Cart
        let i = auxCart.findIndex(Item => Item.id == Item.id)
        auxCart.splice(i,1)
        setCart(auxCart)
    }

    return (
        <>
        <CartContext.Provider value={{Cart, addItem, removeItem}}>
            {props.children}
        </CartContext.Provider>
        </>

    );
}

export {CartContext,CartProvider};