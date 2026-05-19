import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import logo from "../component/icons/logo.jpeg";

import "./topbar.css";

function Topbar() {

  const navigate = useNavigate();

  return (

    <nav className="navbar navbar-expand-lg topbar-main shadow-lg">

      <div className="container-fluid">

        {/* LEFT SIDE */}

        <div className="left-header d-flex align-items-center">

          <img
            src={logo}
            alt="logo"
            className="topbar-logo"
          />

          <h2
            className="brand-name"
            onClick={() => navigate('/')}
          >
            RJPM Taxi
          </h2>

        </div>

        {/* MOBILE BUTTON */}

        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >

          <span className="navbar-toggler-icon"></span>

        </button>

        {/* RIGHT SIDE */}

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >

          <ul className="navbar-nav gap-lg-4">

            <li className="nav-item">

              <NavLink
                className="nav-link nav-custom"
                to="/"
              >
                Home
              </NavLink>

            </li>

            <li className="nav-item">

              <NavLink
                className="nav-link nav-custom"
                to="/car"
              >
                Car
              </NavLink>

            </li>

            <li className="nav-item">

              <NavLink
                className="nav-link nav-custom"
                to="/faq">
                FAQ
              </NavLink>

            </li>

          </ul>

        </div>

      </div>

    </nav>

  );
}

export default Topbar;