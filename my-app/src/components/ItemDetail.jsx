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
    const {addItem} = useCartContext();

    function onAdd(el,amount) {
        addItem(el , amount);
    } 
    
    return (
        
        <div className="card text-center" style={{width: '18rem'}}>
            <img src={data.img} className="card-img-top"></img>
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">${data.price}</p>
                <p>{data.descrip}</p>
                <ItemCount stock={data.stock} setCont={setCont} cont={cont}/>
                <Link className="btn" to="/cart" onClick={() => onAdd(data,cont)}>Comprar</Link>
            </div>
        </div>
    ) 
    
}


export default ItemDetail;
