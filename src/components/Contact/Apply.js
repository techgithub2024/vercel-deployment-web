import React, { useState } from "react";
import ContactImg from "../../images/contact-img.png";

const Apply = ({ jd }) => {
  const [name, setName] = useState(""); // for form-data
  const [email, setEmail] = useState(""); // for form-data
  const [positionRole, setPositionRole] = useState(""); // for form-data
  const [phoneNumber, setPhoneNumber] = useState(""); // for form-data
  const [portfolioUrl, setPortfolioUrl] = useState(""); // for form-data
  const [coverLetter, setCoveLetter] = useState(""); // for form-data
  const [resume, setResume] = useState(""); // for form-data
  const [file, setFile] = useState(null); // for setting the file after upload

  // Handle file change
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setResume(uploadedFile); 
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setPositionRole(jd);

    // Create a new FormData object
    const formData = new FormData();

    // Append all form values to FormData
    formData.append("resume", file); // Append file
    formData.append("name", name);
    formData.append("email", email);
    formData.append("position_role", positionRole); // Appending role (adjust if you want the prop `jd`)
    formData.append("phone_number", phoneNumber);
    formData.append("portfolio_url", portfolioUrl);
    formData.append("cover_letter", coverLetter);
    formData.append("job_description", jd); // Appending job description

    // Log FormData entries (for testing)
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    try {
      const response = await fetch("http://localhost:3000/job-mail", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      const result = await response.json();
      console.log("Form submitted successfully:", result);
      alert("Form submitted successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert('Error submitting form');
      window.location.reload();
    }
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
                      <small className="form-text text-muted">
                        Resume Upload in pdf or docx. Max 2MB.
                      </small>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="positionRole"
                        value={jd}
                        onChange={(e) => setPositionRole(e.target.value)}
                        placeholder="Position Role"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="url"
                        value={portfolioUrl}
                        onChange={(e) => setPortfolioUrl(e.target.value)}
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
                        value={coverLetter}
                        onChange={(e) => setCoveLetter(e.target.value)}
                        placeholder="Cover Letter"
                        className="form-control"
                      />
                    </div>
                  </div>

                  {/* Hidden input for job description */}
                  <input type="hidden" name="jd" value={jd} />

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
