// ============================
// Car.js
// ============================

// npm install react-slick slick-carousel react-icons

import React from 'react';

import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import car1 from '../component/images/car1.jpeg';
import car2 from '../component/images/car2.jpeg';
import car3 from '../component/images/car3.jpeg';
import car4 from '../component/images/car4.jpeg';

import logo from '../component/icons/logo.jpeg';

const Car = () => {

  const cards = [

    {
      img: car1,
      text1: "Swift (Dzire / Etios)",
      text2: "One Way --> ₹14",
      text3: "Round Trip --> ₹13",
      text4: "Seat: 4 + 1",
      text5:"• Minimum: One-way 130 km with AC",
      text6:"• Minimum: Round-trip 250 km with AC",
      text7:"• Toll, parking, Hills charges, state permit, Over Luggage carrier, and pet charges if any extra"
    },

    {
      img: car2,
      text1: "SUV (Ertiga / Marazzo)",
      text2: "One Way --> ₹19",
      text3: "Round Trip --> ₹17",
      text4: "Seat: 6 + 1",
      text5:"• Minimum: One-way 130 km with AC",
      text6:"• Minimum: Round-trip 250 km with AC",
      text7:"• Toll, parking, Hills charges, state permit, Over Luggage carrier, and pet charges if any extra"
    },

    {
      img: car3,
      text1: "Innova",
      text2: "One Way --> ₹24",
      text3: "Round Trip --> ₹22",
      text4: "Seat: 7 + 1",
      text5:"• Minimum: One-way 130 km with AC",
      text6:"• Minimum: Round-trip 250 km with AC",
      text7:"• Toll, parking, Hills charges, state permit, Over Luggage carrier, and pet charges if any extra"
    },

    {
      img: car4,
      text1: "Crysta",
      text2: "One Way --> ₹25",
      text3: "Round Trip --> ₹21",
      text4: "Seat: 7 + 1",
      text5:"• Minimum: One-way 130 km with AC",
      text6:"• Minimum: Round-trip 250 km with AC",
      text7:"• Toll, parking, Hills charges, state permit, Over Luggage carrier, and pet charges if any extra"
    }

  ];

  const settings = {

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,

    responsive: [

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }

    ]
  };

  return (

    <div className="container mt-5 mb-5">

      <h1 className="text-center fw-bold mb-5">
        RJPM Taxi Services
      </h1>

      <style>

        {`

          .car-image{
            height:220px;
            width:100%;
            object-fit:cover;
          }

          .slick-slide > div{
            display:flex;
            justify-content:center;
          }

          .service-card{
            width:100%;
            border-radius:20px;
          }

          @media screen and (max-width:768px){

            .car-image{
              height:180px;
            }

            .service-card{
              width:95%;
              margin:auto;
            }

          }

        `}

      </style>

      <Slider {...settings}>

        {cards.map((card, index) => (

          <div key={index} className="px-2">

            <div className="card shadow-lg border-0 service-card">

              <div className="card-body text-center">

                <img
                  src={card.img}
                  alt="car"
                  className="img-fluid rounded mb-3 car-image"
                />

                <h3 className="fw-bold">
                  {card.text1}
                </h3>

                <hr />

                <h5>{card.text2}</h5>

                <h5>{card.text3}</h5>

                <h5>{card.text4}</h5>

                <hr />

                <h6>{card.text5}</h6>

                <h6>{card.text6}</h6>

                <h6>{card.text7}</h6>

                <div
                  className="d-flex mt-4 overflow-hidden"
                  style={{
                    borderRadius: "40px",
                    height: "50px"
                  }}
                >

                  {/* CALL */}

                  <a
                    href="tel:+919080823652"
                    className="d-flex align-items-center justify-content-center text-white text-decoration-none fw-bold"
                    style={{
                      width: "50%",
                      backgroundColor: "#082B45",
                      gap: "10px"
                    }}
                  >
                    <FaPhoneAlt />
                    CALL
                  </a>

                  {/* WHATSAPP */}

                  <a
                    href="https://wa.me/919080823652"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center text-white text-decoration-none fw-bold"
                    style={{
                      width: "50%",
                      backgroundColor: "#25D366",
                      gap: "10px"
                    }}
                  >
                    <FaWhatsapp />
                    CHAT
                  </a>

                </div>

                <div className="mt-4">

                  <img
                    src={logo}
                    alt="logo"
                    height={40}
                    width={40}
                    className="rounded-circle"
                  />

                  <h6 className="mt-2 fw-bold">
                    RJPM Taxi
                  </h6>

                </div>

              </div>

            </div>

          </div>

        ))}

      </Slider>

    </div>
  );
};

export default Car;