import React from 'react';

const Hearts = () => {
  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>

      {/* Left heart - rotated outwards */}
      <svg
        width="4vw"
        height="4vw"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'rotate(-45deg) translateY(30px)', minWidth: '10px'}}
      >
        <defs>
          <linearGradient id="heartGradient1" x1="0%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.8"/>  
            <stop offset="50%" stopColor="red"/>
            <stop offset="100%" stopColor="darkred"/>
          </linearGradient>
        </defs>
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="url(#heartGradient1)"
          stroke="darkred"    // Outline color
          strokeWidth="2" 
        />
      </svg>

      {/* Middle heart - larger */}
      <svg width="6vw" height="6vw" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
      style={{minWidth: '10px'}}>
        <defs>
          <linearGradient id="heartGradient2" x1="0%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.8"/>  
              <stop offset="50%" stopColor="red"/>
              <stop offset="100%" stopColor="darkred"/>
          </linearGradient>
          </defs>
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="url(#heartGradient2)"
          stroke="darkred"    // Outline color
          strokeWidth="1.5" 
        />
      </svg>



            {/* Right heart - rotated outwards */}
      <svg
        width="4vw"
        height="4vw"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'rotate(45deg) translateY(30px)', minWidth: '10px' }}
      >
        <defs>
          <linearGradient id="heartGradient3" x1="0%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.8"/>  
            <stop offset="50%" stopColor="red"/>
            <stop offset="100%" stopColor="darkred"/>
          </linearGradient>
        </defs>
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="url(#heartGradient3)"
          stroke="darkred"    // Outline color
          strokeWidth="2" 
        />
      </svg>
    </div>
  );
};

export default Hearts;