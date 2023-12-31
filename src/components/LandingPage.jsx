import React from 'react'
import '../styles/LandingPage.scss'
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import HowItWorks from './HowItWorks';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <>
      <section className="container">
        <NavBar />
        <HeroSection />
      </section>
      <HowItWorks />

      <Footer/>
    </>
  );
}

export default LandingPage