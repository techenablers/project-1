// NavHeader.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./NavHeader.css";
import OurPractice from "./pages/OurPractice";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Opd from "../Opd";
import Surgeons from "../Surgeons";
import AppointmentModal from "../AppointmentModal";

function NavHeader() {
  const [first, setfirst] = useState(false)

  const handleModal =()=>{
    console.log('1');
    
    setfirst(true)
  }
  return (
    <Router>
      <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-blue fixed-top">
        <div className="container-fluid">
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link header-style" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-style" to="/ourPractice">
                  Our Practice
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle header-style"
                  to="#"
                  id="servicesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul
                  className="dropdown-menu bg-white"
                  aria-labelledby="servicesDropdown"
                >
                  <li>
                    <Link className="dropdown-item text-dark" to="/Opd" style={{color:'black'}}>
                      Opd
                    </Link>
                  </li> 
                  <li>
                    <Link className="dropdown-item text-dark" to="/Surgeons " style={{color:'black'}}>
                    Surgeons
                    </Link>
                  </li>
                  {/* Add more items as needed */}
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-style" to="/news">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-style" to="/contactUs">
                  Contact Us
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-outline-light ms-lg-auto my-2 my-lg-0"
              onClick={handleModal}
            >
              Book Your Appointment 
            </button>
          </div>
        </div>
      </nav>
    </header>
    <main className="flex-grow-1 mt-5 pt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ourPractice" element={<OurPractice />} />
            <Route path="/services" element={<Services />} />
            <Route path="/news" element={<News />} />
            <Route path="/contactUs" element={<Contact />} />
            <Route path="/Opd" element={<Opd />} />
            <Route path="/Surgeons" element={<Surgeons/>} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        {first&& <AppointmentModal/>}
    </Router>
  );
}

export default NavHeader;
