// ============================
// home.js
// ============================

import React from "react";

/* IMPORT COMPONENTS */

import Car from "../component/car";
import BookNow from "../component/booknow";
import FAQ from "../component/faq";

function Home() {

  return (

    <div className="container text-center mt-5">

      <h1 className="fw-bold">
        Welcome to RJPM Taxi
      </h1>

      <p className="mt-3">
        Safe and Comfortable Taxi Service
      </p>

      {/* COMPONENTS */}

      <Car />

      <BookNow />

      <FAQ />

    </div>

  );
}

export default Home;