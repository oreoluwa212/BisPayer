import React from 'react'
import NavBar from '../components/NavBar'
import '../styles/Navbar.scss'
import '../styles/About.scss'
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

const AboutPage = () => {
  return (
    <>
      <section className="container">
        <NavBar />
        <AboutUs/>
      </section>
      <Footer />
    </>
  );
}

export default AboutPage