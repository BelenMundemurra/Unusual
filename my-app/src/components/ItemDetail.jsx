import {React, useState} from 'react';
import {Link} from 'react-router-dom';
import ItemCount from './ItemCount';

function addCart(item,amount) {
    const productCart = {id:item.id,amount:amount}
    console.log(productCart);
}

const ItemDetail = ({el}) => {
    const [cont, setCont] = useState(1);
    
    return (
        <div className="card text-center" style={{width: '18rem'}}>
            <img src={el.img} className="card-img-top"></img>
            <div className="card-body">
                <h5 className="card-title">{el.title}</h5>
                <p className="card-text">${el.price}</p>
                <p>{el.descrip}</p>
                <ItemCount stock={el.stock} setCont={setCont} cont={cont}/>
                <Link className="btn" to="/cart" onClick={() => addCart(el,cont)}>Comprar</Link>
            </div>
        </div>
    )
}


export default ItemDetail;
