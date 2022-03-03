import React, { useState } from 'react';

function Contact() {
  const [msg, setMessage] = useState(false);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="contact-left">
        <img src="https://cdn.dribbble.com/users/162645/screenshots/1727395/media/f797472068b9614b40062fb965e9e824.gif" alt="" />
      </div>
      <div className="contact-right">
        <h2>Get in touch</h2>

        <form onSubmit={handleSubmit} className="work-form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Subject" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {msg && <span>Thank you. I will reply as soon as possible</span>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
