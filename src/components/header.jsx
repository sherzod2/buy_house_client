import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.webp";
import useToken from "../Hooks/useToken";
import "./styles/header.css";

const Header = () => {
  const { token, setToken } = useToken();
  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <img
            className="header__logo"
            src={logo}
            alt="site's logo"
            width={148}
            height={108}
          />
          <a className="header__tel" href="tel:+998901112233">
            +998901112233
          </a>
          <div className="header__page-controllers">
            {!token && (
              <NavLink className="header__btn" to="/">
                Home
              </NavLink>
            )}

            {token && (
              <NavLink className="header__btn" to="/admin/companies">
                Companies
              </NavLink>
            )}
            {token && (
              <NavLink className="header__btn" to="/admin/complexs">
                Complexs
              </NavLink>
            )}
            {token && (
              <NavLink className="header__btn" to="/admin/rooms">
                Rooms
              </NavLink>
            )}
            {/* {token && (
              <button className="header__btn" to="/admin/rooms">
                Logout
              </button>
            )} */}
            {token && (
              <button
                className="header__btn header__logout"
                onClick={() => setToken(null)}
              >
                Logout
              </button>
            )}
            {!token && (
              <NavLink className="header__btn" to="/login">
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
