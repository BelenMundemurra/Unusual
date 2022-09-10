import React, { useContext } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Navbar from "./Navbar";
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Error404 from './Error404';
import Cart from './Cart';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<ItemListContainer/>} ></Route>
                    <Route path='/category/shop' element={<ItemListContainer/>} ></Route>
                    <Route path='/item/:id' element={<ItemDetailContainer/>} ></Route>
                    <Route path='/cart' element={<Cart/>} ></Route>
                    <Route path='*' element={<Error404/>} ></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;


