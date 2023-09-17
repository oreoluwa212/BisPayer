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

      <section className="reviews-container">
        <div className="reviews-section">
          <div className="text">
            <h1>Our Clients Speak</h1>
            <p>We have been working with clients around the world</p>
          </div>
          <div className="packages-grid">
            <div className="grid1">
              <div className="h3">
                <h3>Efficient Collaborating</h3>
                <h4>
                  Your team's approach to collaboration is outstanding. They
                  actively listen to our ideas and concerns, fostering a
                  productive partnership
                </h4>
                <p>- Lauren Jude</p>
              </div>
            </div>
            <div className="grid1">
              <div className="h3">
                <h3>Intuitive Design</h3>
                <h4>
                  The intuitive design of your products and services is a
                  game-changer. Everything feels user-friendly and effortless .
                </h4>
                <p>- Asa Daniels</p>
              </div>
            </div>
            <div className="grid1">
              <div className="h3">
                <h3>Mind-Blowing Service</h3>
                <h4>
                  Your service consistently goes above and beyond our
                  expectations. The level of dedication and attention to detail
                  is truly mind-blowing.{" "}
                </h4>
                <p>- Johnny Dom</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Reviews;
