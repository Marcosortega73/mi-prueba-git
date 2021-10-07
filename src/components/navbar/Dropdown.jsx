import React, { useState } from "react";
import { MenuItemsTienda, MenuItemsConsejos } from "./MenuItems";
import "./Dropdown.css";
import { Link } from "react-router-dom";

const Dropdown = ({ dropdownTienda, dropdownConsejos }) => {
  const [subClick, setSubClick] = useState(false);
  const [dropdownConsejosmouse, setDropdownConsejos] = useState(false);

  const onMouseEnterConsjeos = () => {
    if (window.innerWidth < 960) {
      setDropdownConsejos(false);
    } else {
      setDropdownConsejos(true);
    }
  };
  const onMouseLeaveConsejos = () => {
    if (window.innerWidth < 960) {
      setDropdownConsejos(false);
    } else {
      setDropdownConsejos(false);
    }
  };

  const handlesubClick = () => setSubClick(!subClick);

  return (
    <>
      {dropdownTienda ? (
        <ul className="dropdown-menu">
          {MenuItemsTienda.map((item, index) => (
            <>
              <li key={index}>
                <Link
                  className={item.className}
                  to={item.patch}
                  onMouseMove={
                    item.subMenu !== undefined
                      ? onMouseEnterConsjeos
                      : onMouseLeaveConsejos
                  }
                  onMouseLeave={onMouseLeaveConsejos}
                >
                  {item.titulo}

                  {item.subMenu !== undefined ? (
                    <>
                      {}
                      <ul
                        onClick={handlesubClick}
                        className={
                          dropdownConsejosmouse
                            ? "dropdown-submenu "
                            : "dropdown-submenuclicked "
                        }
                      >
                        {item.subMenu.map((itemS, indexS) => (
                          <>
                            <li key={indexS} className="li-style">
                              <Link
                                className={itemS.className}
                                to={itemS.patch}
                              >
                                {itemS.titulo}
                              </Link>
                            </li>
                          </>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <></>
                  )}
                </Link>
              </li>
            </>
          ))}

          <>
            {MenuItemsTienda.map((item, index) => (
              <>{console.log("hola", MenuItemsTienda.subMenu)}</>
            ))}
          </>
        </ul>
      ) : (
        <></>
      )}

      {dropdownConsejos ? (
        <ul className="dropdown-menu">
          {MenuItemsConsejos.map((item, index) => (
            <>
              <li key={index}>
                <Link
                  className={item.className}
                  to={item.patch}
                  onMouseMove={
                    item.subMenu !== undefined
                      ? onMouseEnterConsjeos
                      : onMouseLeaveConsejos
                  }
                  onMouseLeave={onMouseLeaveConsejos}
                >
                  {item.titulo}

                  {item.subMenu !== undefined ? (
                    <>
                      {}
                      <ul
                        onClick={handlesubClick}
                        className={
                          dropdownConsejosmouse
                            ? "dropdown-submenu "
                            : "dropdown-submenuclicked "
                        }
                      >
                        {item.subMenu.map((itemS, indexS) => (
                          <>
                            <li key={indexS} className="li-style">
                              <Link
                                className={itemS.className}
                                to={itemS.patch}
                              >
                                {itemS.titulo}
                              </Link>
                            </li>
                          </>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <></>
                  )}
                </Link>
              </li>
            </>
          ))}

          <>
            {MenuItemsConsejos.map((item, index) => (
              <>{console.log("hola", MenuItemsConsejos.subMenu)}</>
            ))}
          </>
        </ul>
      ) : (
        <></>
      )}
    </>
  );
};

export default Dropdown;
