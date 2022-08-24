import React from 'react';

const ItemListContainer = ({name}) => {
    return (
        <>
        <section className='title-section container-fluid'>
            <h1>Bienvenid@ {name}</h1>
            <p>Seccion catálogo</p>
        </section>
        </>
    );
}

export default ItemListContainer;
