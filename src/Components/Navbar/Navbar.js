import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
const Navbar = () => {
  return (
    <div className="navbar_wrapper">
      <div className="navbar_left">
        <div className="navbar_name">Benjamin</div>
        <Toggle />
      </div>
      <div className="navbar_right">
        <div className="navbar_list">
          <ul style={{ listStyleType: "none" }}>
            <li>Inicio</li>
            <li>Skills</li>
            <li>Proyectos</li>
          </ul>
        </div>
        <button className="button">Contacto</button>
      </div>
    </div>
  );
};

export default Navbar;
