import React, { useState, useEffect} from "react";
import './App.css';
import Hearts from './Hearts'
import Confetti from "react-confetti";
import RainingHearts from "./RainingHearts";

async function logVisit() {
  try {

    const proxyUrl = process.env.REACT_APP_PROXY_URL;
    const targetUrl = process.env.REACT_APP_TARGET_URL;
    const ipInfoToken = process.env.REACT_APP_IPINFO_TOKEN;
    const response = await fetch("https://ipinfo.io/json?token=" + ipInfoToken)
    .then(response => response.json())
    .then(data => {
      fetch(proxyUrl + targetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ip: data.ip,
          city: data.city,
          region: data.region,
          country: data.country,
          timestamp: new Date().toISOString()
        })
      });
    })
    console.log("Visit logged successfully!");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

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

  useEffect(() => {
    logVisit();
  }, []);

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
          <div className="heart-group-container">
            <Hearts />
          </div>
          
          <div className="image-container">
            <img src="image2.jpeg" alt="Left Image" className="image" />
          </div>
        </div>

        <div className="btns-video-container">

        <div className="video-container">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/6vPoNvjvfrg?autoplay=1&mute=1&loop=1&playlist=6vPoNvjvfrg&modestbranding=1&showinfo=0&rel=0&controls=1"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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
          <div className="heart-group-container">
            <Hearts />
          </div>
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
            <p className="pop-msg"> Can't wait to see you ❤️</p>
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
          <p>💔 Try Again, Pookie 😭</p>
        </div>
      )}


      <div className="app">
        <RainingHearts />
      </div>
    </div>
  );
}

export default App;
