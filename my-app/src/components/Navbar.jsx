import React, { useContext } from 'react';
import Form from './Form';
import {Link} from 'react-router-dom';
import CartWidget from './CartWidget';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">SUNDAE</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category/shop">Tienda</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart"><CartWidget/></Link>
              </li>
            </ul>
            <Form contBuscar="Productos"/>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
