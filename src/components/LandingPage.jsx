import React from 'react'
import '../styles/LandingPage.scss'
import { Hero, Logo } from '../assets'

const LandingPage = () => {
  return (
    <div className="container">
      <div className="nav-menu">
        <div className="nav-menu-bar">
          <div className="logo">
            <img src={Logo} alt="logo" />
            <p>
              <span>Bis</span>Payer
            </p>
          </div>
          <div className="nav-menu-options">
            <ul className="nav-list">
              <li>
                <a className="active" href="#">
                  Home
                </a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Reviews</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
          <div className="auth">
            <p>
              <a href="#">Login</a>
            </p>
            <button className="sign-in">
              <a href="#">SignUp</a>
            </button>
          </div>
        </div>
      </div>

      <div className="hero-section">
        <div className="hero1">
          <h1>Perfect place for your business promotion</h1>
          <h2>
            Our consultation makes your business easily recognizable in your
            industry. So, invest some creative resources in getting a tagline
            for your business.
          </h2>
          <button className="sign-in">
            <a href="#">Get started</a>
          </button>
        </div>
        <div className="hero2">
          <img src={Hero} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage