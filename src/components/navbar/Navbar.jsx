import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Dropdown from "./Dropdown";
import "./Navbar.css";
import "./Dropdown.css";

const Navbar = ({ navbar }) => {
  const [click, setClick] = useState(false);
  const [dropdownTienda, setDropdownTienda] = useState(false);
  const [dropdownConsejos, setDropdownConsejos] = useState(false);

  const onMouseEnter = () => {
      if(window.innerWidth < 960) {
          setDropdownTienda(false);
      }else{
          setDropdownTienda(true);
      }
  };
  const onMouseLeave = () => {
    if(window.innerWidth < 960) {
        setDropdownTienda(false);
    }else{
        setDropdownTienda(false);
    }
};
const onMouseEnterConsjeos = () => {
    if(window.innerWidth < 960) {
        setDropdownConsejos(false);
    }else{
        setDropdownConsejos(true);
    }
};
const onMouseLeaveConsejos = () => {
  if(window.innerWidth < 960) {
      setDropdownConsejos(false);
  }else{
      setDropdownConsejos(false);
  }
};


  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <>
      <nav className="menu-bar">
          <div className="flex-logo">
        <Link to="/" className="menu-bar-logo">
          <img className="imagen-logo" src={navbar[0].logo} alt="Logo" />
        </Link>
        </div>
        <div className="menu-responsive" onClick={handleClick}>
          <i
            className={
              click ? "fas fa-times fa-spin" : "fas fa-seedling fa-spin"
            }
            style={{ color: "#51cf66" }}
          />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item"

          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Inicio
            </Link>
          </li>
          <li className="nav-item" 
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}>
            <Link to="/tienda"
             className="nav-links" 
             onClick={closeMobileMenu}
             >
              Tienda
              <i
                className="fas fa-caret-down fa-lg"
                style={{ color: "#51cf66" }}
              />
            </Link>
            {dropdownTienda && <Dropdown dropdownTienda={dropdownTienda} />}
          </li>
          <li className="nav-item">
            <Link
              to="/servicios"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Servicios
            </Link>
          </li>
          <li className="nav-item"
          onMouseEnter={onMouseEnterConsjeos}
          onMouseLeave={onMouseLeaveConsejos}
          >
            <Link
              to="/consejos-utiles"
              className="nav-links"
              onClick={closeMobileMenu}
              
            >
              Consejos Utiles{" "}
              <i
                className="fas fa-caret-down fa-lg"
                style={{ color: "#51cf66" }}
              />
            </Link>
            {dropdownConsejos && <Dropdown dropdownConsejos={dropdownConsejos}  />}
          </li>
          <li className="nav-item">
            <Link
              to="/acerca-de"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Acerca de
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contacto"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contacto
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/aviso-legal"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Aviso Legal
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/carrito" className="nav-links" onClick={closeMobileMenu}>
              <div>
                <i
                  class="fas fa-shopping-cart fa-2x"
                  style={{ color: "#51cf66" }}
                ></i>{" "}
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-in"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              <i class="fas fa-user fa-2x" style={{ color: "#51cf66" }}></i>
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
};

export default Navbar;
