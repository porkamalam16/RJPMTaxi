import React, { useState } from "react";

const FAQ = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [

    {
      question: "How do I book a taxi?",
      answer:
        "You can book a taxi by entering your pickup local and destination on our website.  Then choosi the nearest available driver and confirm your booking."
    },

    {
      question: "Is my location safe and private?",
      answer:
        "Yes, your location data is secure and only shared with the driver for booking purposes."
    },

    {
      question: "How can I book a taxi?",
      answer:
        "You can book a taxi through phone call or WhatsApp using the contact buttons."
    },

    {
      question: "How can I contact the driver?",
      answer:
        "After booking, you will see options to 📞 Call the driver directly 💬 Chat via WhatsApp"
    },

    {
      question: "Is there a cancellation fee?",
      answer:
        "Cancellation is free within a limited time. After that, a small fee may be charged depending on the trip."
    },

    {
      question: "What payment methods are available?",
      answer:
        "Cash, UPI--> (Google Pay, PhonePe, etc.)"
    }

  ];

  const toggleFAQ = (index) => {

    if (openIndex === index) {
      setOpenIndex(null);
    }

    else {
      setOpenIndex(index);
    }

  };

  return (

    <div className="container mt-5 mb-5">

      <h1 className="text-center fw-bold mb-4">
        Frequently Asked Questions
      </h1>

      {faqData.map((item, index) => (

        <div
          key={index}
          className="card mb-3 shadow-sm border-0"
        >

          <div
            className="card-header bg-dark text-white d-flex justify-content-between align-items-center"
            style={{
              cursor: "pointer"
            }}
            onClick={() => toggleFAQ(index)}
          >

            <h5 className="mb-0">
              {item.question}
            </h5>

            <span>
              {openIndex === index ? "-" : "+"}
            </span>

          </div>

          {openIndex === index && (

            <div className="card-body">

              <p className="mb-0">
                {item.answer}
              </p>

            </div>

          )}

        </div>

      ))}

    </div>

  );
};

export default FAQ;