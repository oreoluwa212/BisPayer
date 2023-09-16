import React from "react";
import "../styles/Footer.scss";



const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-grid">
          <div className="bispayer">
            <div className="logo">
              <p>
                <span>Bis</span>Payer
              </p>
            </div>
            <div className="bispayer-text">
              <h2>
                There's no shortage of ideas, what's missing is the will to
                execute them <span> Seth Godin</span>
              </h2>

              <div className="icons">

              </div>
            </div>
          </div>
          <div className="quick-links">
            <h1>Quick Links</h1>
            <div className="information-flex">
              <p>
                <a href="#">Home</a>
              </p>
              <p>
                <a href="#">About</a>
              </p>
              <p>
                <a href="#">Appointment</a>
              </p>
              <p>
                <a href="#">Blog</a>
              </p>
              <p>
                <a href="#">Contact</a>
              </p>
            </div>
          </div>
          <div className="company">
            <h1>Company</h1>
            <div className="information-flex">
              <p>
                <a href="#">About</a>
              </p>
              <p>
                <a href="#">Contact</a>
              </p>
              <p>
                <a href="#">Careers</a>
              </p>
              <a href="#">Press</a>
              <p></p>
            </div>
          </div>
          <div className="information">
            <h1>Information</h1>
            <div className="information-flex">
              <p>
                <a href="#">Privacy Policy</a>
              </p>
              <p>
                <a href="#">Terms & Condition</a>
              </p>
              <p>
                <a href="#">FAQ</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright"></div>
    </>
  );
};

export default Footer;
