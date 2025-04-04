import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { saveAs } from 'file-saver';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { useState, useEffect } from 'react';

// library.add(faGithub,faLinkedin,faFilePdf,faEnvelope);

// Custom hook to determine icon size based on screen width
const useIconSize = () => {
    const getIconSize = () => {
      const width = window.innerWidth;
      if (width > 1200) return '4x'; // Large screens
      if (width > 768) return '3x'; // Tablets
      return '2x'; // Small screens
    };
  
    const [iconSize, setIconSize] = useState(getIconSize());
  
    useEffect(() => {
      const handleResize = () => {
        setIconSize(getIconSize());
      };
      window.addEventListener('resize', handleResize);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return iconSize;
  };
  
  // Utility function to open links in a new tab
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };
  
  // Utility function to save a file
  const saveFile = () => {
    saveAs(
      process.env.PUBLIC_URL + '/dmr.pdf',
      'Deividas Mickevicius Resume.pdf'
    );
  };
  
  // Links component
  const Links = () => {
    const iconSize = useIconSize(); // Use the custom hook
  
    return (
      <div id="links">
        <button
          className="button"
          style={{ color: '#0e76a8' }}
          onClick={() => {
            openInNewTab('https://www.linkedin.com/in/davidmickev/');
          }}
        >
          <FontAwesomeIcon size={iconSize} icon={faLinkedin} />
          <span id="textlink"> Linkedin </span>
        </button>
  
        <button
          className="button"
          style={{ color: '#333' }}
          onClick={() => {
            openInNewTab('https://github.com/davidmickev');
          }}
        >
          <FontAwesomeIcon size={iconSize} icon={faGithub} />
          <span id="textlink"> Github </span>
        </button>
  
        <button
          className="button"
          style={{ color: 'red' }}
          onClick={saveFile}
        >
          <FontAwesomeIcon size={iconSize} icon={faFilePdf} />
          <span id="textlink"> Resume </span>
        </button>
  
        <button
          className="button"
          style={{ color: 'black' }}
          onClick={() => {
            openInNewTab('mailto:davidmickev@gmail.com');
          }}
        >
          <FontAwesomeIcon icon={faEnvelope} size={iconSize} />
          <span id="textlink"> Contact </span>
        </button>
      </div>
    );
  };
  
  export default Links;