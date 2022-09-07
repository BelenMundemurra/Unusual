import React from 'react';

const Item = ({img,title,price}) => {
    return (
        <div className="card text-center" style={{width: '18rem'}}>
            <img src={img} className="card-img-top"></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">${price}</p>
            </div>
        </div>
    )
}

export default Item;