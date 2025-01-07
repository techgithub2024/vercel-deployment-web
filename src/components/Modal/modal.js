import React from 'react';
import 'animate.css/animate.min.css'; // Import animate.css for animations

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
    
    <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content animate__animated animate__fadeInDown" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={onClose}>×</button>
            {/* <h2>Service Title</h2> */}
            <div className="modal-body">
              {/* <img src="https://via.placeholder.com/150" alt="Service Image" className="modal-image" /> */}
              <div className="modal-text">
                {/* <p>This is a detailed description of the service. It includes all the features and benefits that the service offers.</p>
                <p>Additional details about the service can go here. This can include more specific information, testimonials, or usage scenarios.</p> */}
              </div>
            </div>
          </div>
        </div>

    </>
  );
};

export default Modal;
