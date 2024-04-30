// import './nav.css'
import data from '../db.json'
import './products.css'
function Men(){
    const menData = data[0].men;
    return(
        <>
            <div id="men">
                <h1>Sneakers for Men</h1>
                <div className="container">
                {menData.map(product => (
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
export default Men