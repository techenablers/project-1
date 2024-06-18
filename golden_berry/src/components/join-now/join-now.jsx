import React, { useState } from "react";
import "./join-now.css";

const JoinNow = ({ isModalOpen, closeModal }) => {
  console.log({ isModalOpen });
  console.log("i am model");
  const [countryCode, setCountryCode] = useState("+91");

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    const countryCodeMap = {
      india: "+91",
      usa: "+1",
      uk: "+44",
      // Add more countries and codes as needed
    };
    setCountryCode(countryCodeMap[selectedCountry]);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="closeBtn" onClick={closeModal}>
          &times;
        </span>
        <h2>Join Now</h2>
        <form id="joinForm">
          <label htmlFor="country">Country *</label>
          <select id="country" name="country" onChange={handleCountryChange}>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            {/* Add more countries as needed */}
          </select>

          <label htmlFor="mobile">Mobile Number *</label>
          <div>
            <input type="text" id="countryCode" value={countryCode} readOnly />
            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="XXX XXX XXX"
            />
          </div>

          <button type="submit">Proceed</button>
        </form>
      </div>
    </div>
  );
};

export default JoinNow;
