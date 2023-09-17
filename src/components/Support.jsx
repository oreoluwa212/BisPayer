import React from "react";
import { Person4 } from "../assets";
import "../styles/Support.scss";

const Support = () => {
  return (
    <>
      <section className="support-section">
        <div className="support-body">
          <div className="support-text">
            <h1>
              A <span>BIG</span> BUSINESS STARTS <span>SMALL</span>
            </h1>
            <div className="sub">
              <h3>
                Our mission is to make your business eaily recognisable in your
                industry. So invest some creative resources a tagline for your
                business.
              </h3>
              <button>Get Started</button>
              <button>FAQs</button>
            </div>
          </div>
          <div className="support-img">
            <div className="img1">
              <img src={Person4} alt="" />
            </div>
            <div className="bg-overlay"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Support;
