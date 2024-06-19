import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import "../../styles/join-now.css";

const JoinNow = ({ isModalOpen, closeModal }) => {
  const [countryCode, setCountryCode] = useState("+91");

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    const countryCodeMap = {
      india: "+91",
      usa: "+1",
      uk: "+44",
    };
    setCountryCode(countryCodeMap[selectedCountry]);
  };

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <span className="closeBtn" onClick={closeModal}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <FontAwesomeIcon
            icon={faLock}
            style={{ color: "#E5881B", fontSize: "50px" }}
          />
          <h1 style={{ color: "#E5881B ", margin: "1rem 0" }}>JOIN NOW</h1>
          <form id="joinForm" className="joinForm">
            <label htmlFor="country">Country *</label>
            <select id="country" name="country" onChange={handleCountryChange} className="selectCountry">
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
            </select>

            <label htmlFor="mobile">Mobile Number *</label>
            <div className="mobileNumber">
              {/* <input type="text" id="countryCode" value={countryCode} readOnly /> */}
              <div>{countryCode}</div>
              <input
                type="text"
                id="mobile"
                name="mobile"
                placeholder="XXX XXX XXX"
              />
            </div>

            <button type="submit" className="join-now proceed">Proceed</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default JoinNow;

{
  /* <div className="modal">
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
</div> */
}
