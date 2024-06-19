import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
import { faLock } from "@fortawesome/free-solid-svg-icons";
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
    <div
      className="modal-dialog modal-dialog-centered"
      style={{
        display: "flex",
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor: "#212529",
        width: "500px",
        height: "550px",
      }}
    >
      <FontAwesomeIcon
        icon={faLock}
        style={{ color: "#E5881B", fontSize: "50px" }}
      />
      <h1 style={{ color: "#E5881B " }}>JOIN NOW</h1>
      <div className=" ">
        <form
          style={{
            // textAlign: "left",
            // marginLeft: "20px",
            // position: "relative",
            // top: "10PX",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <label style={{ color: "#fff" }}>country* </label>
          <input type="text" />
          <label style={{ color: "#fff" }}>Mobile Number * </label>
          <input type="text" />
          <button className="join-now">PROCEED</button>
        </form>
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
