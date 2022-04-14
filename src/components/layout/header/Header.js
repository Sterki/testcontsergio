import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header__Container">
      <div className="header__title">
        <h2>Empresa de Sergio</h2>
      </div>
      <div className="header__navegacion">
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>SERVICES</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="header__session">
        <button>cerrar sesion</button>
      </div>
    </div>
  );
}
