import React, { useState } from "react";

export default function TaxiBookingForm() {

  const [tripType, setTripType] = useState("oneway");

  const [formData, setFormData] = useState({

    name: "",
    mobile: "",
    pickup: "",
    drop: "",
    date: "",

    hour: "",
    minute: "",
    period: ""

  });

  // HANDLE INPUT CHANGE

  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value,

    });

  };

  // HANDLE SUBMIT

  const handleBooking = () => {

    const {
      name,
      mobile,
      pickup,
      drop,
      date,
      hour,
      minute,
      period
    } = formData;

    // VALIDATION

    if (
      !name ||
      !mobile ||
      !pickup ||
      !drop ||
      !date ||
      !hour ||
      !minute ||
      !period
    ) {

      alert("Please fill all details");

      return;
    }

    // FINAL TIME

    const finalTime = `${hour}:${minute} ${period}`;

    // SUCCESS ALERT

    alert("Successfully Received Your Booking!");

    // WHATSAPP MESSAGE

    const message = `

🚖 Taxi Booking Details

Trip Type: ${tripType}

Name: ${name}
Mobile: ${mobile}

Pickup Address: ${pickup}
Drop Address: ${drop}

Pickup Date: ${date}
Pickup Time: ${finalTime}

    `;

    // WHATSAPP NUMBER

    const whatsappNumber = "919080823652";

    // WHATSAPP URL

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    // OPEN WHATSAPP

    window.open(whatsappURL, "_blank");

  };

  return (

    <div

      style={{

        background: "linear-gradient(to bottom, #2ecc40, #0b6623)",

        minHeight: "100vh",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        padding: "20px",

      }}

    >

      <div

        style={{

          width: "100%",
          maxWidth: "400px",

          background: "transparent",

          color: "white",

          fontFamily: "sans-serif",

        }}

      >

        <h1

          style={{

            textAlign: "center",

            marginBottom: "30px",

            fontSize: "32px",

            fontWeight: "bold",

          }}

        >

          I'm Looking For

        </h1>

        {/* TRIP TYPE */}

        <div style={{ marginBottom: "20px" }}>

          <label style={labelStyle}>
            Trip Type
          </label>

          <div
            style={{
              display: "flex",
              gap: "30px",
              marginTop: "10px"
            }}
          >

            <label>

              <input
                type="radio"
                value="oneway"
                checked={tripType === "oneway"}
                onChange={(e) => setTripType(e.target.value)}
              />

              <span style={{ marginLeft: "8px" }}>
                One Way
              </span>

            </label>

            <label>

              <input
                type="radio"
                value="roundtrip"
                checked={tripType === "roundtrip"}
                onChange={(e) => setTripType(e.target.value)}
              />

              <span style={{ marginLeft: "8px" }}>
                Round Trip
              </span>

            </label>

          </div>

        </div>

        {/* NAME */}

        <div style={fieldContainer}>

          <label style={labelStyle}>
            Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Your name"
            style={inputStyle}
            value={formData.name}
            onChange={handleChange}
          />

        </div>

        {/* MOBILE */}

        <div style={fieldContainer}>

          <label style={labelStyle}>
            Mobile Number
          </label>

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile number"
            style={inputStyle}
            value={formData.mobile}
            onChange={handleChange}
          />

        </div>

        {/* PICKUP */}

        <div style={fieldContainer}>

          <label style={labelStyle}>
            Pickup Address
          </label>

          <input
            type="text"
            name="pickup"
            placeholder="Enter pickup location"
            style={inputStyle}
            value={formData.pickup}
            onChange={handleChange}
          />

        </div>

        {/* DROP */}

        <div style={fieldContainer}>

          <label style={labelStyle}>
            Drop Address
          </label>

          <input
            type="text"
            name="drop"
            placeholder="Enter drop location"
            style={inputStyle}
            value={formData.drop}
            onChange={handleChange}
          />

        </div>

        {/* DATE */}

        <div style={fieldContainer}>

          <label style={labelStyle}>
            Pickup Date
          </label>

          <input
            type="date"
            name="date"
            style={inputStyle}
            value={formData.date}
            onChange={handleChange}
          />

        </div>

        {/* TIME */}

        <div style={fieldContainer}>

          <label style={labelStyle}>
            Pickup Time
          </label>

          <div
            style={{
              display: "flex",
              gap: "10px"
            }}
          >

            {/* HOUR */}

            <select
              name="hour"
              style={inputStyle}
              value={formData.hour}
              onChange={handleChange}
            >

              <option value="">
                Hour
              </option>

              {[...Array(12)].map((_, index) => (

                <option
                  key={index + 1}
                  value={String(index + 1).padStart(2, "0")}
                >

                  {String(index + 1).padStart(2, "0")}

                </option>

              ))}

            </select>

            {/* MINUTE */}

            <select
              name="minute"
              style={inputStyle}
              value={formData.minute}
              onChange={handleChange}
            >

              <option value="">
                Min
              </option>

              {[...Array(60)].map((_, index) => (

                <option
                  key={index}
                  value={String(index).padStart(2, "0")}
                >

                  {String(index).padStart(2, "0")}

                </option>

              ))}

            </select>

            {/* AM PM */}

            <select
              name="period"
              style={inputStyle}
              value={formData.period}
              onChange={handleChange}
            >

              <option value="">
                AM/PM
              </option>

              <option value="AM">
                AM
              </option>

              <option value="PM">
                PM
              </option>

            </select>

          </div>

        </div>

        {/* BUTTON */}

        <button
          style={buttonStyle}
          onClick={handleBooking}
        >

          Book Taxi

        </button>

      </div>

    </div>

  );
}

// FIELD CONTAINER

const fieldContainer = {

  marginBottom: "20px",

};

// LABEL STYLE

const labelStyle = {

  display: "block",

  marginBottom: "8px",

  fontSize: "18px",

  fontWeight: "600",

};

// INPUT STYLE

const inputStyle = {

  width: "100%",

  padding: "14px",

  borderRadius: "10px",

  border: "none",

  fontSize: "16px",

  outline: "none",

  boxSizing: "border-box",

};

// BUTTON STYLE

const buttonStyle = {

  width: "100%",

  padding: "15px",

  backgroundColor: "#ffcc00",

  color: "black",

  border: "none",

  borderRadius: "10px",

  fontSize: "18px",

  fontWeight: "bold",

  cursor: "pointer",

  marginTop: "10px",

};