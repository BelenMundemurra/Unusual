import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';

const App = () => {
    return (
        <>
            <Navbar/>
            <ItemListContainer name={"Dev"} />
        </>
    );
}

export default App;


