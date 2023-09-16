import React from 'react'
import NavBar from "../components/NavBar";
import "../styles/Navbar.scss";
import '../styles/Services.scss'
import Footer from '../components/Footer';
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <>
      <section className="container">
        <NavBar />
        <Services/>
      </section>
      <Footer/>
    </>
  );
}

export default ServicesPage