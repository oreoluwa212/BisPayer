import React from "react";
import "../styles/LandingPage.scss";
import { Logo } from "../assets";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
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
            <Link to={"/"}>
              <li>
                <a className="active" href="">
                  Home
                </a>
              </li>
            </Link>
            <Link to={"/about-us"}>
              <li>
                <a href="">About</a>
              </li>
            </Link>
            <Link to={'/services'}>
              <li>
                <a href="#">Services</a>
              </li>
            </Link>
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
  );
};

export default NavBar;
