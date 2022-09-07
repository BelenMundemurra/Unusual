import {React, useState, useEffect} from 'react';  
import {products} from './mock/products';
import ItemList from './ItemList';

const ItemListContainer = ({name}) => {

    const [productsList, setProductos] = useState([]);

    const getProducts = (confirm) => {
        return new Promise ((res,rej) => {
            if (confirm) {
                res(products)
            } else {
                rej("Acceso denegado")
            }
        })
    }

    useEffect(() => {
        getProducts(true)
        .then (products => setProductos(products))
        .catch(error => console.error(error))
    }, []);

    return (
        <>
            <section className='title-section container-fluid'>
                <h1>Bienvenid@ {name}</h1>
                <ItemList productsList={productsList}/>
            </section>
        </>
    );
}

export default ItemListContainer;