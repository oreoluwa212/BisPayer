import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import CompanyFacts from "../components/CopmanyFacts";

const AboutPage = () => {
  return (
    <>
      <div className="container">
        <NavBar />
        <AboutUs />
        <CompanyFacts />
      </div>

        <Footer />

    </>
  );
};

export default AboutPage;
