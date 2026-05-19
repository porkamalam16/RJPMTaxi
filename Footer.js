import React from "react";

import { Link, useLocation } from "react-router-dom";

import {
  FaHome,
  FaCar,
  FaCalendarCheck
} from "react-icons/fa";

function Footer() {

  const location = useLocation();

  return (

    <div
      className="d-flex justify-content-around align-items-center footer-main"
    >

      {/* HOME */}

      <Link
        to="/"
        className={`footer-link ${
          location.pathname === "/" ? "active-footer" : ""
        }`}
      >

        <FaHome size={22} />

        <div>Home</div>

      </Link>

      {/* CAR */}

      <Link
        to="/cars"
        className={`footer-link ${
          location.pathname === "/cars" ? "active-footer" : ""
        }`}
      >

        <FaCar size={22} />

        <div>Cars</div>

      </Link>

      {/* BOOK NOW */}

      <Link
        to="/booknow"
        className={`footer-link ${
          location.pathname === "/booknow" ? "active-footer" : ""
        }`}
      >

        <FaCalendarCheck size={22} />

        <div>Book Now</div>

      </Link>

      {/* CSS */}

      <style>

        {`

          .footer-main{

            position: fixed;
            bottom: 0;
            width: 100%;
            height: 65px;

            background: linear-gradient(
              90deg,
              #082B45,
              #0F4C75
            );

            z-index: 1000;

            box-shadow: 0px -2px 10px rgba(0,0,0,0.3);

          }

          .footer-link{

            color: white;
            text-decoration: none;

            display: flex;
            flex-direction: column;

            align-items: center;
            justify-content: center;

            font-size: 14px;

            width: 100%;
            height: 100%;

            transition: 0.3s;

          }

          .footer-link:hover{

            color: #FFD369;
            transform: translateY(-2px);

          }

          .active-footer{

            background: linear-gradient(
              90deg,
              #FFD369,
              #F9A826
            );

            color: #082B45 !important;

            font-weight: bold;

            border-radius: 12px;

            margin: 5px;

          }

        `}

      </style>

    </div>

  );
}

export default Footer;