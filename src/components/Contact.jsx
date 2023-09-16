import React from 'react'

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-sec">
        <div className="contact-section">
          <div className="contact-text">
            <h1>Discuss your business promotion concerns with our experts.</h1>
            <p>
              Feel free to initiate an in-depth discussion with our team of
              experienced professionals. They are ready to explore the
              intricacies of your promotional goals, provide tailored solutions,
              and offer valuable insights to help your business thrive in the
              competitive market.
            </p>
            <button>Consult Now</button>
          </div>

          <div className="contact-form-container">
            <div className="contact-txt">
              <h1>CONTACT US</h1>

              <div className="contact-form">
                  <input type="text" placeholder="name" />
                  <input type="text" placeholder="email" />
                <input type="text" placeholder="phone" />
                <textarea placeholder="message..."></textarea>
                <button>SEND</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact