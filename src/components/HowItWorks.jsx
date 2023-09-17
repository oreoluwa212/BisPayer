import React from 'react'
import { box, calender, grow, packages, schedule, statistics } from '../assets';


const HowItWorks = () => {
  return (
    <section className="how-it-works-section">
      <div className="heading1">
        <h1>How it works</h1>
        <p>
          Businnesses generally promotes their brand, products, and services by
          identifying audience.
        </p>
      </div>
      <div className="packages">
        <div className="choose-packages">
          <div className="package-bg">
            <img src={box} alt="packages" />
          </div>
          <div className="choose-packages-text">
            <h1>Choose packages</h1>
            <p>
              Businesses generally promote their brand, products, and services
              by identifying audience or users.
            </p>
          </div>
        </div>
        <div className="choose-packages">
          <div className="package-bg">
            <img src={calender} alt="packages" />
            {/* <FontAwesomeIcon className='calender' icon={faCalendarCheck} /> */}
          </div>
          <div className="choose-packages-text">
            <h1>Schedule appointment</h1>
            <p>
              When you have important information to pass onto your people, text
              messaging can be a great way to do it.
            </p>
          </div>
        </div>
        <div className="choose-packages">
          <div className="package-bg">
            <img src={statistics} alt="packages" />
          </div>
          <div className="choose-packages-text">
            <h1>Grow together</h1>
            <p>
              Texting can sometimes come across as an impersonal way to
              communicate, it can be highly beneficial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks