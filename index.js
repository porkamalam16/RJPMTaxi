// ============================
// App.js
// ============================

import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

/* BOOTSTRAP */

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/* COMPONENTS */

import Topbar from "./component/topbar";

import Home from "./component/home";

import Car from "./component/car";

import BookNow from "./component/booknow";

import Footer from "./component/Footer";

function App() {

  return (

    <Router>

      {/* TOPBAR */}

      <Topbar />

      {/* PAGE CONTENT */}

      <div style={{ paddingBottom: "80px" }}>

        <Routes>

          {/* HOME PAGE */}

          <Route
            path="/"
            element={<Home />}
          />

          {/* CAR PAGE */}

          <Route
            path="/cars"
            element={<Car />}
          />

          {/* BOOK NOW PAGE */}

          <Route
            path="/booknow"
            element={<BookNow />}
          />

        </Routes>

      </div>

      {/* FOOTER */}

      <Footer />

    </Router>

  );
}

export default App;