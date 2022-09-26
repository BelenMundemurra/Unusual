import {React, useState, useEffect} from 'react';  
import ItemList from './ItemList';
import { collection, getDocs } from 'firebase/firestore';
import {db} from './services/firebase';

const ItemListContainer = () => {

    const [productsList, setProductos] = useState([]);
    

    const getData = async () => {
        try {
            const document = collection(db,"ItemCollection")
            const col = await getDocs(document)
            const result = col.docs.map((doc) => doc = {id: doc.id, ...doc.data()})
            setProductos(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <>
            <section className='title-section container-fluid'>
                <h1>Bienvenid@</h1>
                <ItemList productsList={productsList}/>
            </section>
        </>
    );
}

export default ItemListContainer;