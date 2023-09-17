import React, { useState } from "react";
import "../styles/LandingPage.scss";
import { Logo } from "../assets";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faBars } from "@fortawesome/free-solid-svg-icons";
import SignUp from "./SignUp";
import '../styles/SignupLogin.scss'

const NavBar = () => {
  // UseState for opening the Drawer
  const [openDrawer, setOpenDrawer] = useState(false);

    // OnClick function handling Open Drawer
  const handleClose = () => {
    setOpenDrawer(false);
  };

  // UseState for opening the Login  and signup Modal
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  // OnClick function handling Open Drawer
  const onClickMenu = () => {
    setOpenDrawer(true);
  };



  // Onclick function handling LogIn
  const onClickOpenLogIn = () => {
    setOpenSignUpModal(false);
    setOpenLoginModal(true);
  };

  // Onclick function handling SignUp
  const onClickOpenSignup = () => {
    setOpenLoginModal(false);
    setOpenSignUpModal(true);
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
          <ul className="first">
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
            {/* <a onClick={onClickOpenLogIn}>Login</a> */}
          </p>
          <button className="sign-in">
            <a onClick={onClickOpenSignup}>SignUp</a>
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

      {openLoginModal && (
        <Login
          setOpenLoginModal={setOpenLoginModal}
          onClickOpenSignup={onClickOpenSignup}
        />
      )}
      {openSignUpModal && (
        <SignUp
          setOpenSignUpModal={setOpenSignUpModal}
          onClickOpenLogIn={onClickOpenLogIn}
        />
      )}
    </div>
  );
};

export default NavBar;
