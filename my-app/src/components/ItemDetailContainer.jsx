import {React, useState, useEffect} from 'react';  
import {products} from './mock/products';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router';

const ItemDetailContainer = () => {
    const [itemList, setItem] = useState([]);
    const getItem = (confirm) => {
        return new Promise ((res,rej) => {
            if (confirm) {
                res(productItem)
            } else {
                rej("Acceso denegado")
            }
        })
    }

    let {id} = useParams();
    const productItem = products.filter(el => el.id == id)

    useEffect(() => {
        getItem(true)
        .then (productItem => setItem(productItem))
        .catch(error => console.error(error))
    }, []);

    

    return (
        <>
            <section className='title-section container-fluid'>
                <h1>Detalle del producto</h1>
                {itemList.map((el) => <ItemDetail key={el.id} el={el} />)}
            </section>
        </>
    );
}

export default ItemDetailContainer;