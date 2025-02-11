import React, { useState } from "react";
import './App.css';
import Hearts from './Hearts'
import Confetti from "react-confetti";


function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const handleMouseEnter = () => {
    setIsShaking(true);
  };

  const handleMouseLeave = () => {
    setIsShaking(false);
  };
  return (
    <div className="top-container">
      <h1>
        <span className="header">
          Will you be my Valentine?
        </span>
        <Hearts />
      </h1>

      {/* Hearts component under the text */}
      <div className="hearts-container">
        <div className="hearts-left">
          <div className="image-container">
            <img src="image5.jpeg" alt="Left Image" className="image" />
          </div>
          <Hearts />
          <div className="image-container">
            <img src="image2.jpeg" alt="Left Image" className="image" />
          </div>
        </div>

        <div className="btns-video-container">

          <div className="video-container">
            <video className="video"controls autoPlay muted>
            <source src="iwannabeyours.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="btns-container">
              <button className='btn button-big' style={{backgroundColor: '#5cb85c'}}
                onClick={() => {setRejected(false); setShowPopup(true) }}> Yes</button>
              <button className={`btn ${isShaking ? 'shake' : ''}`} style={{backgroundColor: '#e74c3c'}}
                onClick={() => {setRejected(true); setTimeout(() => { setRejected(false)}, 4000)}}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                > No</button>
          </div>
        </div>

        <div className="hearts-right">
          <div className="image-container">
            <img src="image3.jpeg" alt="Left Image" className="image" />
          </div>
          <Hearts />
          <div className="image-container">
            <img src="image4.jpeg" alt="Left Image" className="image" />
          </div>
        </div>
      </div>

            {/* Popup Modal */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>💘 Happy Valentine's Day! 💘</h2>
            <p> Can't wait to see you ❤️</p>
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Confetti Effect When Popup Appears */}
      {showPopup && <Confetti />}

      {rejected && (
        <div className="sad-popup">
          <p>💔 Try Again Pookie 😭</p>
        </div>
      )}
    </div>
  );
}

export default App;
