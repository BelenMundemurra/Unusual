import React from 'react';
import {NavLink} from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img src="https://firebasestorage.googleapis.com/v0/b/ecommerce-react---coderhouse.appspot.com/o/logo.png?alt=media&token=9f67ca31-bfa5-4fa1-886b-ebbf3984dfe5" alt="logo_Unusual" />
            </div>
            <div>
                <p className='cat_title' >Developed by Belén Mundemurra</p>
            </div>
            <div>
                <NavLink className="nav-link" to="/">INICIO</NavLink>
                <NavLink className="nav-link" to="/category/shop">TIENDA</NavLink>
            </div>
        </div>
    )
}

export default Footer;