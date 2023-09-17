import React, { useState } from "react";
import "../styles/LandingPage.scss";
import { Logo } from "../assets";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  // UseState for opening the Drawer
  const [openDrawer, setOpenDrawer] = useState(false);

  // OnClick function handling Open Drawer
  const onClickMenu = () => {
    setOpenDrawer(true);
  };

  // OnClick function handling Open Drawer
  const handleClose = () => {
    setOpenDrawer(false);
  };
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
            <Link to={"/services"}>
              <li>
                <a href="#">Services</a>
              </li>
            </Link>
            <Link to={"/reviews"}>
              <li>
                <a href="">Reviews</a>
              </li>
            </Link>
            <Link to={"/support"}>
              <li>
                <a href="">Support</a>
              </li>
            </Link>
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

      {/* --------------------Mobile Navigation-------------------------- */}
      <div className="mobile-nav-container">
        <div className="logo">
          <Link to={"/"}>
            <p>
              <span>Bis</span>Payer
            </p>
          </Link>
        </div>
        <FontAwesomeIcon icon={faBars} onClick={onClickMenu} />
      </div>
      {openDrawer && (
        <div className="mobile-nav-items">
          <FontAwesomeIcon
            icon={faX}
            className="close-icon"
            onClick={handleClose}
          />

          <div className="logo">
            <Link to={"/"}>
              <p>
                <span>Bis</span>Payer
              </p>
            </Link>
          </div>

          <div className="first">
            <Link to={"/about-us"}>
              <a>About</a>
            </Link>
            <Link to={"/services"}>
              <a>Services</a>
            </Link>
            <Link to={"/reviews"}>
              <a>Reviews</a>
            </Link>
            <Link to={"/support"}>
              <a>Support</a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
