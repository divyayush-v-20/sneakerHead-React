import { useEffect, useState } from 'react';
import './products.css';

function Women({ handleAddToCart }) {
  const [womenData, setWomenData] = useState([]);

  useEffect(() => {
    fetch('https://sneaker-db.onrender.com/women')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setWomenData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div id="women">
      <h1>Sneakers for Women</h1>
      <div className="container">
        {womenData.length > 0 ? (
          womenData.map(product => (
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

export default Women;






