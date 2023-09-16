import React from 'react'
import { Frame1, Frame2, Frame3, Frame4 } from '../assets/index'

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-package">
        <div className="popular-packages">
          <h1>Popular packages</h1>
          <div className="toggle-btns"></div>
        </div>
        <div className="packages-grid">
          <div className="grid1">
            <img src={Frame1} width="300" alt="" />
            <div className="h3">
              <h3>The basic package to start your promotion</h3>
              <p>#50,000</p>
            </div>
          </div>
          <div className="grid1">
            <img src={Frame2} width="300" alt="" />
            <div className="h3">
              <h3>The standard package to grow your business</h3>
              <p>#105,000</p>
            </div>
          </div>
          <div className="grid1">
            <img src={Frame3} width="300" alt="" />
            <div className="h3">
              <h3>The premium package to boost your promotion</h3>
              <p>#200,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services