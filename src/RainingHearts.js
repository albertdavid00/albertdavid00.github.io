import React, { useEffect, useState } from "react";

const RainingHearts = () => {
  const [hearts, setHearts] = useState([]);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const createHeart = () => {
      setHearts((prevHearts) => [
        ...prevHearts,
        {
          id: Math.random(),
          left: Math.random() * 100, // Random horizontal position
          size: Math.random() * 20 + 30, // Random size (30px - 50px)
          duration: Math.random() * 3 + 3, // Random fall duration (3s - 6s)
        },
      ]);

      // Remove hearts after a certain time to prevent memory issues
      setTimeout(() => {
        setHearts((prevHearts) => prevHearts.slice(1));
      }, 5000);
    };

    const interval = setInterval(createHeart, 300); // Create a new heart every 300ms

    // Show "I wanna be yours" after a few seconds
    setTimeout(() => setShowText(true), 4000); // Adjust timing if needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="raining-hearts">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          ❤️
        </div>
      ))}

      {/* Special Text: "I wanna be yours" falls & stays at the bottom */}
      {showText && (
        <div className="special-text">I wanna be yours</div>
      )}
    </div>
  );
};

export default RainingHearts;
