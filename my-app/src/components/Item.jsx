import React from 'react';
import {Link} from 'react-router-dom';

const Item = ({el}) => {
    return (
        <div className="card text-center" style={{width: '18rem'}}>
            <img src={el.img} className="card-img-top"></img>
            <div className="card-body">
                <h5 className="card-title">{el.name}</h5>
                <p className="card-text">${el.price}</p>
                <Link className="btn" to={"/item/"+el.id} element={el}>VER MAS</Link>
            </div>
        </div>
    )
}

export default Item;