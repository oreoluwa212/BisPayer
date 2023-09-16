import React from 'react'
import NavBar from "../components/NavBar";
import "../styles/Navbar.scss";
import Footer from '../components/Footer';

const ServicesPage = () => {
  return (
    <>
      <section className="container">
        <NavBar />
      </section>
      <Footer/>
    </>
  );
}

export default ServicesPage