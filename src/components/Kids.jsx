import './products.css'
import data from '../db.json'
function Kids(){
    const kidsData = data[0].kids;
    return(
        <>
            <div id="kids">
                <h1>This is Kids Page</h1>
                <div className="container">
                {kidsData.map(product => (
                  <div key={product.id} className="product">
                    <img src={product.imageUrl} alt={product.name} />
                    <div className="product-details">
                      <h3>{product.name}</h3>
                      <p>Price: {product.price}</p>
                    </div>
                  </div>
                ))}
                </div>
            </div>
        </>
    )
}
export default Kids