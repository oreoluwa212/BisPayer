import React from 'react'
import { Frame6 } from "../assets/index";


const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-grid">
        <div className="grid-one">
          <div className="about-us">
            <div className="line"></div>
            <h2>About Us</h2>
            <div className="line"></div>
          </div>
          <div className="boost">
            <span>We Help You To </span>
            <h1>Boost Your Business</h1>
          </div>
          <div className="boost-text">
            <h4>
              "At BisPayer, we're the driving force behind your
              business success. Our passion is to elevate brands, boost
              visibility, and ignite growth. With a blend of innovation and
              strategy, we light the path to your prosperity. Join us on this
              journey toward limitless potential."
            </h4>
            <button className='get-btn'> Get Started</button>
          </div>
        </div>
        <div className="grid-two">
          <img src={Frame6} alt="" />
        </div>
      </div>

      <div className="company-facts">
         
      </div>
    </div>
  );
}

export default AboutUs