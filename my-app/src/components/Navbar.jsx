import React from 'react';
import {NavLink} from 'react-router-dom';
import CartWidget from './CartComponents/CartWidget';
import '../style/styles.css';
function Navbar() {
  return (
    <>
      <nav className="navbar">
          <div>
            <NavLink className='navbar-brand' to="/">UNUSUAL</NavLink>
          </div>
          <div >
              <ul className='navbar-link'>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">INICIO</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/category/shop">TIENDA</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-cart" to="/cart"><CartWidget/></NavLink>
                </li>
              </ul>
          </div>
      </nav>
  </> 
  );
}

export default Navbar;
