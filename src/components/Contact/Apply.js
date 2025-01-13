import React, { useState } from "react";
import ContactImg from "../../images/contact-img.png";
import emailjs from '@emailjs/browser';

const Apply = ({ jd }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [letter, setLetter] = useState("");

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      // Validate file size (less than 2MB)
      if (uploadedFile.size > 2000000) {
        alert("File size should be less than 2MB.");
        setFile(null); // Clear the file input
      } else {
        setFile(uploadedFile); // Set the file if valid
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
      // Send email using EmailJS
      emailjs.sendForm('service_u74jejo', 'template_p6fu2db', e.target, 'Uge6_0K_ob7YEO_ER')
        .then((result) => {
          console.log(result.text);
          alert('Job application submitted successfully!');
        }, (error) => {
          console.log(error.text);
          alert('Failed to send application. Please try again later.');
        });

      // Reset form fields after submission
      setName("");
      setEmail("");
      setPhoneNumber("");
      setSubject("");
      setMessage("");
      setFile(null);
      setUrl("");
      setLetter("");
  };

  return (
    <>
      <div className="contact-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>APPLY HERE</h2>
            <div className="bar"></div>
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
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
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
                        onChange={handleFileChange}
                      />
                      <small className="form-text text-muted">Resume Upload in pdf or docx. Max 2MB.</small>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        disabled
                        name="subject"
                        value={jd} // The job description is passed as a prop
                        placeholder="Position Interested In"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Portfolio URL"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="coverLetter"
                        cols="30"
                        rows="5"
                        value={letter}
                        onChange={(e) => setLetter(e.target.value)}
                        placeholder="Cover Letter"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-sm-12">
                    <button type="submit" className="btn btn-primary">
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
  );
};

export default Apply;
