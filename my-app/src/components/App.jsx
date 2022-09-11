import React, { useContext } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Navbar from "./Navbar";
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Error404 from './Error404';
import Cart from './Cart';
import {CartProvider} from './context/CartContext';
const App = () => {
    return (
        <>
            <BrowserRouter>
                <CartProvider>
                    <Navbar/>
                    <Routes>
                        <Route path='/' element={<ItemListContainer/>} />
                        <Route path='/category/shop' element={<ItemListContainer/>} />
                        <Route path='/item/:id' element={<ItemDetailContainer/>} />
                        <Route path='/cart' element={<Cart/>} />
                        <Route path='*' element={<Error404/>} />
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </>
    );
}

export default App;


