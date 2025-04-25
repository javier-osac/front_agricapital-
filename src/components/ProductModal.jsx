import carritoIcon from "../assets/seguro.png";
const ProductModal = ({ product, onClose }) => {
  if (!product) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>❌</button>
        <h2>{product.name}</h2>
        <div className="modal-description">
          {Array.isArray(product.description) ? (
          <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
            {product.description.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
          </ul>
  ) : (
    <p style={{ textAlign: 'left' }}>{product.description}</p>
  )}
</div>
        <p><strong>Precio:</strong> ${product.price.toLocaleString()}</p>
        <button className="add-to-cart-btn">
        <img src={carritoIcon} alt="Carrito" style={{ width: "20px", marginRight: "8px" }} />
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductModal;