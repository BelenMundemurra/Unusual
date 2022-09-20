import React from 'react';
import {useCartContext} from './context/CartContext';

const ItemCart = ({product}) => {
    const {removeItem} = useCartContext();
    return (
        <>
        <div className="card w-75">
            <div className="card-body">
                <img src={product.item.img}/>
                <h5 className="card-title">{product.item.name}</h5>
                <p className="card-text">Cantidad: {product.amount}</p>
                <p className="card-text">Precio unidad: ${product.item.price}</p>
                <p className="card-text">Precio Total: ${product.amount * product.item.price}</p>
                <button className="btn btn-primary" onClick={() => removeItem(product.id)}>Eliminar</button>
            </div>
        </div>
        </>
    );
}

export default ItemCart;
