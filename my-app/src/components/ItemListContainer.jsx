import React from 'react';
import ItemCount from './ItemCount';
import Productos from './ItemList';

const ItemListContainer = ({name}) => {

    function onAdd(cont) {
        console.log('Se seleccionaron '+ cont +' productos')
    }
    return (
        <>
        <section className='title-section container-fluid'>
            <h1>Bienvenid@ {name}</h1>
            <ItemCount stock={15} onAdd={onAdd}/>
            <Productos/>
        </section>
        </>
    );
}

export default ItemListContainer;
