import "./Heroes.css";
import productdata from "../../data/productdetails.json";

function Product({ onAddToTeam }) {
  return (
    <div className="product-grid">
      {productdata.map((product) => {
        return (
          <div key={product.id} className="product-card">
            <img
              alt={product.name}
              className="product-image"
              src={product.image}
            ></img>
            <div className="product-name"> {product.name}</div>
            <button
              onClick={() =>
                onAddToTeam(product.id, product.name, product.image)
              }
            >
              Add to Team
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
