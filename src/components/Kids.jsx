import { useEffect, useState } from 'react';
import './products.css';

function Kids({ handleAddToCart }) {
  const [kidsData, setKidsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/kids')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setKidsData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div id="kids">
      <h1>Sneakers for Kids</h1>
      <div className="container">
        {kidsData.length > 0 ? (
          kidsData.map(product => (
            <div key={product.id} className="product">
              <img src={product.imageUrl} alt={product.name} />
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>Price: {product.price}</p>
              </div>
              <button onClick={() => handleAddToCart(product)}>
                <i className="fa-solid fa-cart-plus"></i> Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Kids;
