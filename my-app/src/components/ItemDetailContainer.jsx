import {React, useState, useEffect} from 'react';  
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router';
import { collection, doc,getDoc} from 'firebase/firestore';
import {db} from './services/firebase';

const ItemDetailContainer = () => {
    const [                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 , setItem] = useState([]);

    let {id} = useParams();

    const getSelected = async (idItem) => {
        try {
            const document = collection(db,"ItemCollection",idItem)
            const response = await getDoc(document)
            const result = {id: response.id, ...response.data()}
            setItem(result)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSelected(id)
    }, []);
    
    
    return (
        <>
            <section className='title-section container-fluid'>
                <h1>Detalle del producto</h1>
                <ItemDetail key={id} el={setItem} />
            </section>
        </>
    );
}

export default ItemDetailContainer;