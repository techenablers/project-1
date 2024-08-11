import React from 'react'
import '../../landingPage/LandingPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function Footer() {
  return (
    <footer className="bg-light ">
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>
              We are a leading company in our field, committed to providing quality services and innovative solutions to our clients.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light">Home</a></li>
              <li><a href="#services" className="text-light">Services</a></li>
              <li><a href="#contact" className="text-light">Contact</a></li>
              <li><a href="#about" className="text-light">About</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <p>
              Email: <a href="mailto:info@example.com" className="text-light">info@example.com</a><br />
              Phone: +1 (123) 456-7890
            </p>
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <small>&copy; 2024 Your Company. All Rights Reserved.</small>
      </div>
    </footer>


  </footer>
  )
}

export default Footer