import {React, useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import ItemCount from './ItemCount';
import { useCartContext } from './context/CartContext';

const ItemDetail = ({el}) => {
    const [cont, setCont] = useState(1);
    //Context
    const {addItem} = useCartContext();

    function onAdd(el,amount) {
        addItem(el , amount);
    } 

    return (
        <div className="card text-center" style={{width: '18rem'}}>
            <img src={el.img} className="card-img-top"></img>
            <div className="card-body">
                <h5 className="card-title">{el.title}</h5>
                <p className="card-text">${el.price}</p>
                <p>{el.descrip}</p>
                <ItemCount stock={el.stock} setCont={setCont} cont={cont}/>
                <Link className="btn" to="/cart" onClick={() => onAdd(el,cont)}>Comprar</Link>
            </div>
        </div>
    )
}


export default ItemDetail;
