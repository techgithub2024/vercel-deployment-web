import React from "react"
import { useState } from "react"
import ContactImg from "../../images/contact-img.png"
import emailjs from 'emailjs-com';

const ContactForm = () => {
const [name , setName] = useState("")
const [email , setEmail] = useState("")
const [phoneNumber , setPhoneNumber] = useState("")
const[subject , setSubject] = useState("")
const [message , setMessage] = useState("")
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(name , email , phoneNumber , subject , message)
  if (name && email && phoneNumber && subject && message) {
    const data = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      subject: subject,
      message: message
    };
  
    fetch('http://localhost:7000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  } else {
    alert('Please fill out all fields.');
  }
};
  return (
    <>
      <div className="contact-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch With Us</h2>
            <div className="bar"></div>
            <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <img src={ContactImg} alt="Contact" />
            </div>

            <div className="col-lg-6 col-md-12">
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e)=>{
                          setName(e.target.value)
                        }}
                        placeholder="Your Name"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e)=>{
                          setEmail(e.target.value)
                        }}
                        placeholder="Your email address"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="number"
                        value={phoneNumber}
                        onChange={(e)=>{
                          setPhoneNumber(e.target.value)
                        }}
                        placeholder="Your phone number"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        value={subject}
                        onChange={(e)=>{
                          setSubject(e.target.value)
                        }}
                        placeholder="Your Subject"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="text"
                        cols="30"
                        rows="5"
                        value={message}
                        onChange={(e)=>{
                          setMessage(e.target.value)
                        }}
                        placeholder="Write your message..."
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-sm-12">
                    <button type="submit" className="btn btn-primary" >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm
