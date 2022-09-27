import {React, useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import ItemCount from './ItemCount';
import { useCartContext } from './context/CartContext';
import {getFirestore, doc, getDoc} from 'firebase/firestore';

const ItemDetail = () => {

    const [data,setData] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        const querydb = getFirestore();
        const querydoc = doc(querydb,'ItemCollection',id);
        getDoc(querydoc)
        .then(res => setData({id: res.id, ...res.data()}))
    }, [])

    const [cont, setCont] = useState(1);
    //Context
    const {addItem, cart} = useCartContext();

    function onAdd(el,amount) {
        addItem(el , amount);
    } 

    return (
        <div className="card text-center" style={{width: '18rem'}}>
            <img src={data.img} className="card-img-top"></img>
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">${data.price}</p>
                <p>{data.descrip}</p>
            </div>
            {cart.some((el) => el.item.id === data.id) ? <div><p>Producto agregado al carrito</p><Link to="/cart">Ir al carrito</Link></div> : <div><ItemCount stock={data.stock} setCont={setCont} cont={cont}/><button onClick={() => onAdd(data,cont)}>Comprar</button></div>}
        </div>
    )
}

export default ItemDetail;
