import {React, useState, useEffect} from 'react';

const productos = [
    {nombre: "Remera", talle: "1", precio: 200, stock: 15},
    {nombre: "Pollera", talle: "2", precio: 400, stock: 30}
]

function consultarPromesa(confirmacion) {
    return new Promise ((res,rej) => {
        if (confirmacion) {
            res(productos)
        } else {
            rej("Acceso denegado")
        }
    })
}

const Productos = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        consultarPromesa(true)
        .then(data => {
            const productosJSX = data.map((producto, indice) => 
                <div className="card" key={indice} style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Nombre: {producto.nombre}</h5>
                        <p className="card-text">a</p>
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

export default Productos;
