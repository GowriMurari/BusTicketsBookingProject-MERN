import React from 'react';
import '../css/ContactPage.css';  

const ContactPage = () => {
  return (
    <div className="contact-us-container mt-4">
      <h1>Contact Us</h1>
      
   
      <div className="contact-info">
        <div className="hours">
          <h2>Hours of Operation</h2>
          <p>9:00 to 17:00, Mon-Fri (Excluding Holidays)</p>
        </div>
        <div className="phone">
          <h2>Phone</h2>
          <p>+31 208915387</p>
        </div>
        <div className="general-inquiries">
          <h2>General Inquiries</h2>
          <p>info.APMS@busbooking.com</p>
        </div>
      </div>
      
     
      <form className="contact-form">
        <h2>Contact Form</h2>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
