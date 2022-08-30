import {React, useState} from 'react';

const ItemCount = ({stock, onAdd}) => {

    //Consultar estado del contador SET => Modificar GET => Consultar
    const [cont, setCont] = useState(0);

    function sum() {
        if (cont < stock) {
            setCont(cont + 1)
        }
    }

    function rest() {
        if (cont > 0) {
            setCont(cont - 1)
        }
    }

    return (
        <>
        <div className="card">
            <div className="card-header">
                Producto
            </div>
            <div className="card-body">
                <h5 className="card-title">Stock: {stock}</h5>
                <p className="card-text">Cantidad: {cont}</p>
                <button className="btn btn-primary" onClick={() => sum()}>+</button>
                <button className="btn btn-primary" onClick={() => rest()}>-</button> 
                <button className="btn btn-primary" onClick={() => onAdd(cont)}>Confirmar</button>
            </div>
        </div>
        </>
    );
}

export default ItemCount;
