import React from "react";
import {Customer} from '../assets/index'

const Reviews = () => {
  return (
    <main>
      <section className="our-work-section">
        <div className="heading">
          <h1>What customers say about our products</h1>
        </div>
        <div className="img">
          <img src={Customer} alt="" />
        </div>
      </section>

      <section className="reviews-container"></section>
    </main>
  );
};

export default Reviews;
