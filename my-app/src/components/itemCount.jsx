import {React, useState} from 'react';

const ItemCount = ({stock,setCont,cont}) => {
    //Consultar estado del contador SET => Modificar GET => Consultar
    function sum() {
        if (cont < stock) {
            setCont(cont + 1)
        }
    }

    function rest() {
        if (cont > 1) {
            setCont(cont - 1)
        }
    }

    return (
        <>
        <div className="card-count">
                <p>Stock disponible {stock}</p>
                <p>Cantidad {cont}</p>
                <div className='btn-count'>
                    <button onClick={() => sum()}>+</button>
                    <button onClick={() => rest()}>-</button> 
                </div>
        </div>
        </>
    );
}
export default ItemCount;
