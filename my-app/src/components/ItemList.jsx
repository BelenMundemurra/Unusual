import {React, useState, useEffect} from 'react';
import productos from './Item';
import ItemCount from './ItemCount';

function consultarPromesa(confirmacion) {
    return new Promise ((res,rej) => {
        if (confirmacion) {
            res(productos)
        } else {
            rej("Acceso denegado")
        }
    })
}

const ItemList = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        consultarPromesa(true)
        .then(data => {
            const productosJSX = data.map((producto, indice) =>
                <div className="card text-center" key={indice} style={{width: '18rem'}}>
                    <img src={producto.img} className="card-img-top"></img>
                    <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text">{producto.descrip}</p>
                        <p className="card-text">${producto.precio}</p>
                        <ItemCount stock={producto.stock}/>
                    </div>
                </div>
            )
            setProductos(productosJSX)
        })
        .catch(error => {
            console.error(error)
        })
    }, []);

    return (
        <div className='row'>
            {productos}
        </div>
    );
}

export default ItemList;
