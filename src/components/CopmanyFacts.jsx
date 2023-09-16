import React from "react";
import "../styles/About.scss";
import { Person1, Person2, Person3, grow, packages, schedule } from "../assets";

const CompanyFacts = () => {
  return (
    <main className="container">
      <div className="company-container">
        <div className="company-facts">
          <div className="team">
            <div className="about-us">
              <h2>Meet the Team</h2>
            </div>

            <div className="team-members">
              <div className="mem-one">
                <div className="img">
                  <img src={Person1} alt="" />
                </div>
                <h3>Raphel Edmundo</h3>
              </div>
              <div className="mem-one">
                <div className="img">
                  <img src={Person2} alt="" />
                </div>
                <h3>Emily Cooper</h3>
              </div>
              <div className="mem-one">
                <div className="img">
                  <img src={Person3} alt="" />
                </div>
                <h3>Elliot Anderson</h3>
              </div>
            </div>
            
            <div className="team-text">
              <h4>What We Do</h4>
              <div className="what-we-do">
                <div className="what-we-do-grid">
                  <div className="web">
                    <div className="img">
                      <img src={packages} alt="" />
                    </div>
                    <div className="grid1">
                      <h2>Website Strategy</h2>
                      <p>
                        Our web strategy experts craft digital roadmaps tailored
                        to your business objectives. With a keen focus on user
                        experience and market trends, we guide you toward a
                        competitive online edge.
                      </p>
                    </div>
                  </div>
                  <div className="web">
                    <div className="img">
                      <img src={schedule} alt="" />
                    </div>
                    <div className="grid1">
                      <h2>Digital Marketing</h2>
                      <p>
                        In the fast-paced digital landscape, we drive your brand
                        forward with precision. Our data-driven digital
                        marketing campaigns amplify your reach and engagement,
                        delivering tangible results.
                      </p>
                    </div>
                  </div>
                  <div className="web">
                    <div className="img">
                      <img src={grow} alt="" />
                    </div>
                    <div className="grid1">
                      <h2>Quality Building</h2>
                      <p>
                        We're committed to building a foundation of excellence
                        in everything we do. From product development to
                        customer service, quality is at the core of our values,
                        ensuring long-term success and client satisfaction."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <button className="get-btn"> Get Started</button> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CompanyFacts;
