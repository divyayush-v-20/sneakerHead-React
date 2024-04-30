import './products.css'
import data from '../db.json'
function Women(){
    const womenData = data[0].women;
    return(
        <>
            <div id="women">
                <h1>Sneakers for Women</h1>
                <div className="container">
                {womenData.map(product => (
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
export default Women