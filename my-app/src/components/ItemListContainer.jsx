import React from 'react';  
import ItemList from './ItemList';
import Productos from './ItemList';

const ItemListContainer = ({name}) => {
    return (
        <>
        <section className='title-section container-fluid'>
            <h1>Bienvenid@ {name}</h1>
            <ItemList/>
        </section>
        </>
    );
}

export default ItemListContainer;
