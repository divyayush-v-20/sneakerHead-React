import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button id='top-btn'
      className={`scroll-to-top ${isVisible ? 'show' : 'hide'}`}
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: '1000', 
        height:'40px',
        width:'40px',
        border:'none',
        cursor:'pointer',
        backgroundColor:'white',
        color:'black',
        borderRadius:'5px'
      }}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};

export default ScrollToTopButton;
