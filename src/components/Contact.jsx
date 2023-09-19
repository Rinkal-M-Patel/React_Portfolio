import React, { useState } from 'react';
import { faStar,faPhone,faLocation,faMessage} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [emailError, setEmailError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    for (const key in formData) {
      if (!formData[key]) {
        alert('Please fill out all fields.');
        return;
      }
    }

    // Basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!formData.email.match(emailPattern)) {
      setEmailError('Invalid email address.');
      return;
    }

    // Form data is valid, proceed with submission
    // Replace this with your server endpoint and submission logic
    console.log('Form data:', formData);

    // Reset the form after submission if needed
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    setEmailError('');
  };
 

  return (
    <>
    <section id='Contact'>
    <div className="container">
      <div className="row">
      <h2 className='text-center'>CONTACT ME</h2>
        
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
          <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="col-lg-8 col-xl-8">
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="name"
                type="text"
                placeholder="Enter your name..."
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor="name">Full name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="email">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="phone"
                type="tel"
                placeholder="(123) 456-7890"
                value={formData.phone}
                onChange={handleChange}
              />
              <label htmlFor="phone">Phone number</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                id="message"
                type="text"
                placeholder="Enter your message here..."
                style={{ height: '10rem' }}
                value={formData.message}
                onChange={handleChange}
              />
              <label htmlFor="message">Message</label>
            </div>
            <button className="btn btn-primary btn-xl" type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="col-md-4">
      
      <div className="more-info">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem expedita
          aperiam aliquid at. Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis mollitia
          inventore?
        </p>
        <ul className="list-ico">
          <li>
           <span><FontAwesomeIcon icon={faLocation} /></span>  329  UNITED KINGDOM, UK 1101
          </li>
          <li>
            <span><FontAwesomeIcon icon={faPhone} /></span> (000) 111-0089
          </li>
          <li>
            <span><FontAwesomeIcon icon={faMessage} /></span> contact@example.com
          </li>
        </ul>
      </div>
      <div className="socials">
        <ul>
          <li>
            <a href="/">
              <span className="ico-circle">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
              </span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="ico-circle">
              <FontAwesomeIcon icon={faGithub} />
              </span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="ico-circle">
              <FontAwesomeIcon icon={faLinkedin} />
              </span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="ico-circle">
              <FontAwesomeIcon icon={faInstagram} />
              </span>
            </a>
          </li>
        </ul>
      </div>
        </div>
       
       
      </div>
    </div>
    </section>
    </>
  );
}

export default Contact;
