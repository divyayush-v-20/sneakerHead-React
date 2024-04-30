import './components/nav.css'
import './components/products.css'
import './components/tagline.css'
import Nav from './components/nav'
import Tagline from './components/tagline'
import Men from './components/Men'
import Women from './components/Women'
import Kids from './components/Kids'
import ImageSlider from './components/Slider'
import React from 'react';
import './components/Slider.css'
import ReactDOM from 'react-dom';
import Footer from './components/Footer'
import './components/Footer.css'
import './App.css'
import ScrollToTopButton from './components/toTop'
// import ContactUs from './components/ContactUs'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App(){
  const images = [
    'https://sneakerfortress.com/wp-content/uploads/2023/11/Nike-Air-Jordan-1-Black-Toe.jpg',
    'https://cms-cdn.thesolesupplier.co.uk/2022/07/aj1-shattered-backboard-factory-flaw-freaky-blink.png.webp',
    'https://media.gq.com/photos/654933b13a3d7eec5b8a1f0d/master/pass/jordans.jpg',
    'https://i.pinimg.com/originals/9c/f5/56/9cf5567e770cb28096371f909296ac0e.jpg'
    
  ];
  return(
    <>
        
        <Nav/>
        <Tagline/>
        <ImageSlider images = {images}/>
        <div className="products">
          <Men/>
          <Women/>
          <Kids/>
        </div>
        <Footer/>
        <ScrollToTopButton/>
    </>
  )
}
export default App