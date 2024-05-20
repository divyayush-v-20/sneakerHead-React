import { useEffect, useState } from 'react';
import './products.css';

function Men({ handleAddToCart }) {
  const [menData, setMenData] = useState([]);

  useEffect(() => {
    fetch('https://sneaker-db.onrender.com/men')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setMenData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div id="men">
      <h1>Sneakers for Men</h1>
      <div className="container">
        {menData.length > 0 ? (
          menData.map(product => (
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

export default Men;


