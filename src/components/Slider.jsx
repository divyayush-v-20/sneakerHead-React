import React, { useState } from 'react';
import './Slider.css'
const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="slider-container">
      <h1>Stride in Confidence with sneakerHead Kicks</h1>
      <div className="slider" style={{ backgroundImage: `url(${images[currentSlide]})`, width: '100%', backgroundSize: 'cover' }} />
      <div className="buttons">
        <button onClick={goToPreviousSlide}> <i class="fa-solid fa-arrow-left"></i> </button>
        {images.map((_, index) => (
          <button key={index} onClick={() => goToSlide(index)} className={index === currentSlide ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
        <button onClick={goToNextSlide}> <i class="fa-solid fa-arrow-right"></i> </button>
      </div>
    </div>
  );
};

export default ImageSlider;