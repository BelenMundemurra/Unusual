import {React, useState, useEffect} from 'react';
import ItemCount from './ItemCount';
import ListaProductos from './Item';
const ItemList = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
            const productosJSX = ListaProductos.map((producto, indice) =>
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
    }, []);

    return (
        <div className='row'>
            {productos}
        </div>
    );
}

export default ItemList;


