import React from "react";
import logo from "./assets/logo.png";
import "./styles/porfile-page.css";

const NavHeader = (props) => {
  const { setModalOpen } = props;
  const hnadleLogIn = () => {
    setModalOpen(true)
  };
  const handleJoinNow = () => {
    console.log("i am joining Now ");
  };
  return (
    <div>
      <header className="header-container">
        <div style={{ marginLeft: "70px" }}>
          <img src={logo} alt="logo" width="150px" />
        </div>

        <div
          style={{
            display: "flex",
            marginRight: "50px",
            // justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className="navItems">HOME</p>
          <p className="navItems">GAMING AREAS</p>
          <p className="navItems">ONGOING PROMOTIONS</p>
          <p className="navItems">OUR NEWS</p>
          <button className="login" type="submit " onClick={hnadleLogIn}>
            LogIn
          </button>
          <button
            className="joinTopbutton"
            type="submit "
            onClick={handleJoinNow}
          >
            {" "}
            Join Now
          </button>
        </div>
      </header>
    </div>
  );
};

export default NavHeader;
