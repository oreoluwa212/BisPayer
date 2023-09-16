import React from 'react'
import NavBar from '../components/NavBar'
import '../styles/Navbar.scss'
import '../styles/About.scss'
import '../styles/Company.scss'
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import CompanyFacts from '../components/CopmanyFacts';

const AboutPage = () => {
  return (
    <>
      <section className="container">
        <NavBar />
        <AboutUs />
      </section>
      <section className="container2">
        <CompanyFacts />
      </section>
      <Footer />
    </>
  );
}

export default AboutPage