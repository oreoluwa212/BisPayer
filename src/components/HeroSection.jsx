import React from "react";
import { Hero } from "../assets";


const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero1">
        <h1>Perfect place for your business promotion</h1>
        <h2>
          Our consultation makes your business easily recognizable in your
          industry. So, invest some creative resources in getting a tagline for
          your business.
        </h2>
        <button className="sign-in">
          <a href="#">Get started</a>
        </button>
      </div>
      <div className="hero2">
        <img src={Hero} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
