import React from "react";

import logo from "../component/icons/logo.jpeg";

function Topbar() {

  return (

    <div
      className="d-flex align-items-center justify-content-between px-3 topbar-main"
    >

      {/* LEFT SIDE */}

      <div className="d-flex align-items-center">

        {/* LOGO */}

        <img
          src={logo}
          alt="logo"
          className="logo-image"
        />

        {/* COMPANY NAME */}
      <center>
        <h2 className="ms-2 company-name">
          RJPM Taxi
        </h2>
      </center>
      </div>

      {/* CSS */}

      <style>

        {`

          .topbar-main{

            width:100%;
            height:90px;

            background: linear-gradient(
              90deg,
              #082B45,
              #0F4C75
            );

            position: sticky;
            top:0;

            z-index:1000;

            box-shadow:0px 2px 10px rgba(0,0,0,0.2);

          }

          .logo-image{

            width:100px;
            height:100px;

            border-radius:75%;

            object-fit:cover;

            border:2px solid white;

          }

          .company-name{

            color:white;

            font-weight:bold;

            margin-top:8px;

          }

            .logo-image{

              width:50px;
              height:50px;

            }

          }

        `}

      </style>

    </div>

  );
}

export default Topbar;