import React from 'react';
import '../components/ContactForm.css';

export default function ContactForm() {
  return (
    <section className="contact-page-wrapper">
      <div className="contact-page-grid">
        
        {/* Left Column: Typography */}
        <div className="contact-text-block">
          <h1 className="contact-heading">Get in touch.</h1>
          <p className="contact-subheading">
            Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.
          </p>
        </div>

        {/* Right Column: The Form */}
        <div className="contact-form-block">
          <form className="minimal-form" onSubmit={(e) => e.preventDefault()}>
            
            <div className="input-group">
              <input type="text" id="name" placeholder="Your name" required />
            </div>
            
            <div className="input-group">
              <input type="email" id="email" placeholder="Your email" required />
            </div>

            <div className="input-group">
              <input type="text" id="subject" placeholder="Subject" required />
            </div>

            <div className="input-group">
              {/* Rows="1" keeps it looking like a single line until they type */}
              <textarea id="message" placeholder="Message" rows="3" required></textarea>
            </div>

            <button type="submit" className="submit-button">SEND MESSAGE</button>
          </form>
        </div>

      </div>
    </section>
  );
}