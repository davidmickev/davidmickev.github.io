import React, { useState, useEffect } from 'react';

const ZoomOnScrollImage = ({ src, maxZoom = 6, zoomStartPosition = 0, zoomEndPosition = 1000 }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const zoomRange = zoomEndPosition - zoomStartPosition;

      if (scrollTop >= zoomStartPosition && scrollTop <= zoomEndPosition) {
        const zoomFactor = Math.pow((scrollTop - zoomStartPosition) / zoomRange, 2); // Adjust exponential factor
        setScale(1 + zoomFactor * (maxZoom - 1));
      } else if (scrollTop < zoomStartPosition) {
        setScale(1);
      } else if (scrollTop > zoomEndPosition) {
        setScale(maxZoom);
      }
    };

    // Trigger the scroll handler once on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [maxZoom, zoomStartPosition, zoomEndPosition]);

  return (
    <div
      style={{
        position: 'relative', // Make the parent container a positioning context
        overflow: 'hidden',
        height: '100vh',
        backgroundColor: 'rgb(0, 0, 0)', // Set the background color (e.g., black)
      }}
    >
      {/* Zoomable Image */}
      <img
        src={src}
        alt="Zoomable"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `scale(${scale})`,
          transformOrigin: 'top',
          transition: 'transform 0.4s ease-out',
        }}
      />

      {/* Responsive Overlay Content with Zoom */}
      <div
        style={{
          display: 'flex', // Enable Flexbox
          justifyContent: 'center', // Center horizontally
          alignItems: 'center', // Center vertically
          position: 'absolute', // Position relative to the parent container
          top: '-10%', // Start at the top of the parent container
          left: 0, // Start at the left of the parent container
          width: '100%', // Full width of the parent container
          height: '100%', // Full height of the parent container
          color: 'white', // Text color
          textAlign: 'center', // Center the text
          backgroundColor: 'transparent', // Optional: Semi-transparent background
          padding: '20px', // Optional: Padding for the text
          boxSizing: 'border-box', // Ensure padding doesn't affect width/height
          transform: `scale(${scale})`, // Apply the same scale transformation
          transformOrigin: 'top', // Ensure the zoom originates from the top
          transition: 'transform 0.5s ease-out', // Smooth zoom transition
        }}
      >
        <div>
          <h1
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 3rem)', // Scales between 1.5rem and 3rem
              marginBottom: '1rem', // Relative spacing
            }}
          >
            Hello! <br />
            My name is David, <br />
            a software engineer from Chicago. <br />
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 3vw, 1.5rem)', // Scales between 1rem and 1.5rem
            }}
          >
            Scroll down to explore more!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZoomOnScrollImage;