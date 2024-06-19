import React, { useState } from "react";
import logo from "../../assets/logo.png";
import JoinNow from "../join-now/join-now";
import LogIn from "../login/LogIn";
import "../../styles/porfile-page.css";

const NavHeader = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLogInModalOpen, setIsLogInModalOpen] = useState(false);

  const handleLogIn = () => setIsLogInModalOpen(true);
  const handleJoinNow = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <img src={logo} alt="logo" width="150px" />
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
                <button className="login" type="submit " onClick={handleLogIn}>
                  LogIn
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="joinTopbutton"
                  type="button"
                  onClick={handleJoinNow}
                >
                  {" "}
                  Join Now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isModalOpen && <JoinNow closeModal={closeModal} />}
      {isLogInModalOpen && <LogIn setIsLogInModalOpen={setIsLogInModalOpen}/>}
    </div>
  );
};

export default NavHeader;
