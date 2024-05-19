import './components/nav.css';
import './components/products.css';
import './components/tagline.css';
import Nav from './components/nav';
import Tagline from './components/tagline';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import ImageSlider from './components/Slider';
import { useState } from 'react';
import './components/Slider.css';
import Footer from './components/Footer';
import './components/Footer.css';
import './App.css';
import ScrollToTopButton from './components/toTop';
import Cart from './components/Cart';

const parsePrice = (priceString) => {
  console.log('Parsing price:', priceString);
  const parsedPrice = parseFloat(priceString.replace(/[₹,]/g, ''));
  console.log('Parsed price:', parsedPrice);
  return parsedPrice;
};

function App() {
  const images = [
    'https://sneakerfortress.com/wp-content/uploads/2023/11/Nike-Air-Jordan-1-Black-Toe.jpg',
    'https://cms-cdn.thesolesupplier.co.uk/2022/07/aj1-shattered-backboard-factory-flaw-freaky-blink.png.webp',
    'https://media.gq.com/photos/654933b13a3d7eec5b8a1f0d/master/pass/jordans.jpg',
    'https://i.pinimg.com/originals/9c/f5/56/9cf5567e770cb28096371f909296ac0e.jpg'
  ];

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item) => {
    const existingProduct = cart.find(product => product.id === item.id);
    if (existingProduct) {
      setCart(cart.map(product => 
        product.id === item.id ? { ...product, quantity: product.quantity + 1 } : product
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (item) => {
    const existingProduct = cart.find(product => product.id === item.id);
    if (existingProduct.quantity === 1) {
      setCart(cart.filter(product => product.id !== item.id));
    } else {
      setCart(cart.map(product => 
        product.id === item.id ? { ...product, quantity: product.quantity - 1 } : product
      ));
    }
  };

  const handleQuantityChange = (item, quantity) => {
    if (quantity <= 0) {
      setCart(cart.filter(product => product.id !== item.id));
    } else {
      setCart(cart.map(product =>
        product.id === item.id ? { ...product, quantity } : product
      ));
    }
  };
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const calculateTotalPrice = () => {
    const total = cart.reduce((total, product) => {
      const price = parsePrice(product.price);
      console.log('Product price:', price, 'Quantity:', product.quantity);
      return total + price * product.quantity;
    }, 0).toFixed(2);
    console.log('Total price:', total);
    return total;
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <Nav toggleCart={toggleCart} cartItemCount = {cartItemCount}/>
      <Tagline />
      <ImageSlider images={images} />
      <div className="products">
        <Men handleAddToCart={handleAddToCart} />
        <Women handleAddToCart={handleAddToCart} />
        <Kids handleAddToCart={handleAddToCart} />
      </div>
      <Cart 
        cart={cart}
        handleRemoveFromCart={handleRemoveFromCart}
        handleQuantityChange={handleQuantityChange}
        calculateTotalPrice={calculateTotalPrice}
        isOpen={isCartOpen}
        onClose={closeCart} 
      />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
