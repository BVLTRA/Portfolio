import React, { useState } from 'react';
import '../components/ContactForm.css';

export default function ContactPage() {
  const [status, setStatus] = useState("SEND MESSAGE");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Stops the browser from reloading the page
    setStatus("SENDING...");

    // Extract the exact text from your inputs
    const formData = {
      access_key: "6b6b2847-c267-4702-a1bc-d3c8df9ba609", // Drop your key here
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    // Fire the data at the serverless relay
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("MESSAGE SENT");
        e.target.reset(); // Clear the lines
        setTimeout(() => setStatus("SEND MESSAGE"), 3000); // Reset button text after 3 seconds
      } else {
        setStatus("ERROR. TRY AGAIN.");
      }
    } catch (error) {
      setStatus("NETWORK ERROR.");
    }
  };

  return (
    <div className="page-container" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <section className="contact-page-wrapper">
        <div className="contact-page-grid">
          
          <div className="contact-text-block">
            <h1 className="contact-heading">Get in touch.</h1>
            <p className="contact-subheading">
              Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.
            </p>
          </div>

          <div className="contact-form-block">
            {/* Wire the onSubmit to our new function */}
            <form className="minimal-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input type="text" name="name" placeholder="Your name" required />
              </div>
              <div className="input-group">
                <input type="email" name="email" placeholder="Your email" required />
              </div>
              <div className="input-group">
                <input type="text" name="subject" placeholder="Subject" required />
              </div>
              <div className="input-group">
                <textarea name="message" placeholder="Message" rows="3" required></textarea>
              </div>
              <button type="submit" className="submit-button">{status}</button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}