import React from 'react';
import CartWidget from './CartWidget';
import Form from './form';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">SUNDAE</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sobre Nosotros</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Tienda</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Remeras</a>
                  <a className="dropdown-item" href="#">Polleras</a>
                  <a className="dropdown-item" href="#">Buzos</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">Accesorios</a>
                </div>
              </li>
            </ul>
            <Form contBuscar="Productos"/>
            <CartWidget/>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
