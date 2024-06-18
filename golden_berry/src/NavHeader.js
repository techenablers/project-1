import React from "react";
import logo from "./assets/logo.png";
import JoinNow from "./components/join-now/join-now";
import LogIn from "./components/LogIn";
import "./styles/porfile-page.css";

const NavHeader = (props) => {
  const { setModalOpen, isModalOpen, isLogInModalOpen, setIsLogInModalOpen } =
    props;
  console.log({ isModalOpen });
  const handelLogIn = () => {
    setIsLogInModalOpen(true);
  };
  const handelJoinNow = () => {
    console.log("i am joining Now ");
    setModalOpen(true);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" width="150px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  GAMING AREAS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ONGOING PROMOTIONS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  OUR NEWS
                </a>
              </li>
              <li className="nav-item">
                <button className="login" type="submit " onClick={handelLogIn}>
                  LogIn
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="joinTopbutton"
                  type="submit "
                  onClick={handelJoinNow}
                >
                  {" "}
                  Join Now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isModalOpen && <JoinNow />}
      {isLogInModalOpen && <LogIn />}
    </div>
  );
};

export default NavHeader;
