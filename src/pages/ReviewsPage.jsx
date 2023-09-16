import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import "../styles/Navbar.scss";
import '../styles/Reviews.scss'
import Reviews from '../components/Reviews';


const ReviewsPage = () => {
  return (
    <>
      <section className="container">
        <NavBar />
        <Reviews/>
        <Footer/>
      </section>
    </>
  );
}

export default ReviewsPage