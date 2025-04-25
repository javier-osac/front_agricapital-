import carritoIcon from "../assets/seguro.png";
const ProductCard = ({ product, onClick }) => {
    return (
      <div className="product-card" onClick={() => onClick(product)}>
        <img src={product.imageCard} alt={product.name} className="product-img" />
        <h3>{product.name}</h3>
        <div className="card-bottom">
          <p className="price">${product.price.toLocaleString()}</p>
          <button className="add-to-cart-btn">
          <img src={carritoIcon} alt="Carrito" style={{ width: "30px", marginRight: "8px" }} />
            Agregar al carrito
          </button>
        </div>
      </div>
    );
  };

export default ProductCard;