// NavBar

import React from "react";
import CardWidget from "./CardWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/Assets/logo.png" alt="logo tienda-" width="35" height="35" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                GATOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                PERROS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ACCESORIOS
              </a>
            </li>
          </ul>
          <CardWidget imgSrc="Assets/Carrito.png"/>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
