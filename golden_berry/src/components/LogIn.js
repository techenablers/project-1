import React from "react";
import "../styles/porfile-page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";

const LogIn = () => {
  return (
    <div
      className="modal-dialog modal-dialog-centered"
      style={{
        display: "flex",
        backgroundColor: "#212529",
        width: "500px",
        height: "550px",
      }}
    >
      <div className="col-12 col-lg-6 col-md-6 col-sm-6">
        <FontAwesomeIcon icon={faLock} style={{ color: "#E5881B",fontSize: '50px' }} />
        <h1 style={{ color: "#E5881B " }}>LOGIN</h1>
        <form
          style={{
            textAlign: "left",
            marginLeft: "20px",
            position: "relative",
            top: "10PX",
          }}
        >
          <label style={{ color: "#fff" }}>USERNAME </label>
          <input type="text" />
          <label style={{ color: "#fff" }}>PASSWORD </label>
          <input type="text" />
          <button className="join-now">LOGIN</button>
        </form>
        <div
          style={{
            alignSelf: "left",
            position: "relative",
            textAlign: "left",
            top: "40px",
            marginLeft: "20px",
            color: "#E5881B",
          }}
        >
          <p>Forget Password ?</p>
          <p>Legal Information</p>
        </div>
      </div>
      <div className="col-12 col-lg-6 col-md-6 col-sm-6" style={{position:'relative', marginBottom:'130px'}}>
        <FontAwesomeIcon
          icon={faKey}
          style={{ color: "#E5881B", fontSize: '50px' }}
        />
        <h1 style={{ color: "#E5881B " }}>NEW MEMBER?</h1>
        <button className="join-now"> JoinNow</button>
      </div>
    </div>
  );
};

export default LogIn;
