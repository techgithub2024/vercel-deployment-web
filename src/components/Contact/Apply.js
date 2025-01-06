import React from "react"
import { useState } from "react"
import ContactImg from "../../images/contact-img.png"
import emailjs from 'emailjs-com';

const Apply = () => {
const [name , setName] = useState("")
const [email , setEmail] = useState("")
const [phoneNumber , setPhoneNumber] = useState("")
const[subject , setSubject] = useState("")
const [message , setMessage] = useState("")
const handleSubmit = (e) => {
  e.preventDefault();

  if (name && email && phoneNumber && subject && message) {
    const templateParams = {
      name,
      email,
      phoneNumber,
      subject,
      message,
    };

    emailjs
      .send('service_u74jejo', 'template_pwfgf9w', templateParams)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send the message. Please try again.');
        }
      );
  } else {
    alert('Please fill out all fields.');
  }
};
  return (
    <>
      <div className="contact-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>APPLY HERE</h2>
            <div className="bar"></div>
            {/* <p>Anything On your Mind. We’ll Be Glad To Assist You!</p> */}
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
        type="file"
        name="resume"
        id="resume"
        className="form-control"
        accept=".pdf,.docx"
      />
      <small className="form-text text-muted">Upload resume in  PDF or DOCX file less than 2MB.</small>
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
                        placeholder="Portfolio Url"
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
                        placeholder="Position Interested In"
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
                        placeholder="Cover Letter"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-sm-12">
                    <button type="submit" className="btn btn-primary" >
                      Apply
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

export default Apply
