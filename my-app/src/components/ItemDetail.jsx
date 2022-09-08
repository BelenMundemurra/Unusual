import {React} from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({img,title,price,descrip,stock}) => {

    return (
        <div className="card text-center" style={{width: '18rem'}}>
            <img src={img} className="card-img-top"></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">${price}</p>
                <p>{descrip}</p>
                <ItemCount stock={stock}/>
            </div>
        </div>
    )
}

export default ItemDetail;
