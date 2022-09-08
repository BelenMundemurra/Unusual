import React from 'react';
import {Link} from 'react-router-dom';

const Item = ({id,img,title,price}) => {

    const url = "/item/"+id;

    return (
        <div className="card text-center" style={{width: '18rem'}}>
            <img src={img} className="card-img-top"></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">${price}</p>
                <Link className="btn" to={url} >VER MAS</Link>
            </div>
        </div>
    )
}

export default Item;