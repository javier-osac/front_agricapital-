import React, { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/Services.css";
import carritoIcon from "../assets/seguro.png";


const products = {
  herramientas: [
    {
      id: 1,
      name: "Desbrozadora",
      description: [
        "Motor a gasolina de 2 tiempos (cilindraje entre 43cc y 52cc)",
        "Sistema de arranque fácil (Easy Start)",
        "Incluye cuchilla de 3 puntas y cabezal con nylon",
        "Barra recta reforzada para mayor durabilidad",
        "Arnés de soporte ergonómico para mayor comodidad",
        "Ideal para cortar maleza, pasto alto y limpieza de terrenos difíciles"
      ],
      price: 450000,
      imageCard: "/desbrosadoraFront.jpg"     // imagen en la tarjeta
    },
    
    {
      id: 2,
      name: "Pulverizador",
      description: [
        "Capacidad: 16 litros",
        "Bomba manual de alta presión",
        "Correas ajustables para la espalda",
        "Boquilla con aspersión regulable",
        "Ideal para aplicar fertilizantes, insecticidas y herbicidas"
      ],
      price: 115000,
      imageCard: "/pulverizador.jpg",     // imagen en la tarjeta
    },
    {
      id: 3,
      name: "Sistema de riego por goteo",
      description: [
        "Diseñado para cultivos a gran escala: maíz, caña, frutales, hortalizas",
        "Cobertura de hasta 1 hectárea (10.000 m²) dependiendo del diseño",
        "Incluye rollos de manguera de polietileno, goteros integrados y conectores",
        "Sistema compatible con fertirriego (aplicación de fertilizantes vía riego)",
        "Requiere bomba de presión (mínimo 2 HP) y filtro de partículas",
        "Reducción de hasta un 60% en el consumo de agua respecto al riego tradicional",
        "Mejora la uniformidad de riego y reduce enfermedades por exceso de humedad",
        "Fácil ampliación y adaptación al terreno"
      ],
      price: 1200000,
      imageCard: "/sistemaGoteo.jpg",     // imagen en la tarjeta
       // imagen en el modal
    },
  ],
  abonos: [
    {
      id: 4,
      name: "Abonos foliares (8kg)",
      description: [
        "Fórmula balanceada rica en NPK, micronutrientes y aminoácidos",
        "Se aplica directamente sobre las hojas para rápida absorción",
        "Estimula el crecimiento vegetativo y mejora la floración y fructificación",
        "Ideal para cultivos como café, maíz, arroz, hortalizas y frutales",
        "Corrige deficiencias nutricionales visibles en poco tiempo",
        "Compatible con la mayoría de pesticidas y fungicidas",
        "Uso recomendado en fases de alta demanda nutricional",
        "Presentación líquida, fácil de diluir y aplicar",
        "Contenido 8kg por paquete"
      ],
      price: 32000,
      imageCard: "/foliar.jpg",     // imagen en la tarjeta
    },
    {
      id: 5,
      name: "Abonos organicos (10kg)",
      description: [
        "Abono 100% natural, ideal para mejorar la calidad del suelo.",
        "Promueve el crecimiento saludable de plantas.",
        "Aporta nutrientes esenciales como nitrógeno, fósforo y potasio.",
        "Favorece el desarrollo de microorganismos beneficiosos.",
        "Perfecto para huertas, jardines y cultivos orgánicos.",
        "Contenido 10kg por paquete"
      ],
      price: 45000,
      imageCard: "/organico.jpg",     // imagen en la tarjeta

    },
    {
      id: 6,
      name: "Abonos minerales (5kg)",
      description: [
        "Semillas de maíz de alta calidad para un cultivo eficiente.",
        "Resistentes a plagas comunes y enfermedades.",
        "Ideal para siembra en terrenos tanto de clima cálido como templado.",
        "Asegura una buena producción de mazorcas de gran tamaño.",
        "Requiere suelos bien drenados y fertilización adecuada.",
        "Contenido 5kg por paquete"
      ],
      price: 25000, 
      imageCard: "/fertilizante.jpg",     // imagen en la tarjeta
    },
  ],
  semillas: [
    {
      id: 7,
      name: "Maiz (25kg)",
      description: [
        "Semillas de maíz de alta calidad para un cultivo eficiente.",
        "Resistentes a plagas comunes y enfermedades.",
        "Ideal para siembra en terrenos tanto de clima cálido como templado.",
        "Asegura una buena producción de mazorcas de gran tamaño.",
        "Requiere suelos bien drenados y fertilización adecuada.",
        "Contenido 25kg"
      ],
      price: 95000,
      imageCard: "/maiz.jpg",     // imagen en la tarjeta

    },
    {
      id: 8,
      name: "Arroz (25kg)",
      description: [
        "Semillas certificadas de arroz de alta productividad.",
        "Adaptables a diferentes tipos de suelos y condiciones climáticas.",
        "Buena resistencia a plagas y enfermedades comunes del arroz.",
        "Ideal para cultivos tecnificados en zonas húmedas o de riego.",
        "Proporciona cosechas uniformes con excelente calidad de grano.",
        "Contenido 25kg"
      ],
      price: 88000,
      imageCard: "/arroz.jpg",     // imagen en la tarjeta

    },
    {
      id: 9,
      name: "Frijol (25kg)",
      description: [
        "Semillas de frijol certificadas, alto rendimiento y calidad.",
        "Ideales para cultivos en clima templado y cálido.",
        "Buena resistencia a enfermedades como antracnosis y bacteriosis.",
        "Granos uniformes, excelente sabor y valor nutricional.",
        "Aptas para siembra directa o en sistemas asociados (maíz, plátano).",
        "COntenido 25kg"
      ],
      price: 92000,
      imageCard: "/frijol1.jpg",     // imagen en la tarjeta
    },
  ]
};

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

const Services = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const getFilteredProducts = () => {
    const allProducts = [];
  
    if (selectedCategory === "herramientas" || selectedCategory === "todos") {
      allProducts.push(...products.herramientas);
    }
    if (selectedCategory === "abonos" || selectedCategory === "todos") {
      allProducts.push(...products.abonos);
    }
    if (selectedCategory === "semillas" || selectedCategory === "todos") {
      allProducts.push(...products.semillas);
    }
  
    return allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  
  

  return (
    <div className="services-page">
      
      <div className="text-center">
        <h2>Conoce más sobre nuestros productos</h2>
      </div>
      <div className="filter-section">
  <input
    type="text"
    placeholder="Buscar productos..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="search-input"
  />

<div className="category-buttons">
  <button
    onClick={() => setSelectedCategory("todos")}
    className={selectedCategory === "todos" ? "active" : ""}
  >
    Todos
  </button>
  <button
    onClick={() => setSelectedCategory("herramientas")}
    className={selectedCategory === "herramientas" ? "active" : ""}
  >
    Herramientas
  </button>
  <button
    onClick={() => setSelectedCategory("abonos")}
    className={selectedCategory === "abonos" ? "active" : ""}
  >
    Abonos
  </button>
  <button
    onClick={() => setSelectedCategory("semillas")}
    className={selectedCategory === "semillas" ? "active" : ""}
  >
    Semillas
  </button>
</div>

</div>


<div className="products-section">
  <h2>Productos</h2>
  <div className="product-row">
    {getFilteredProducts().map((p) => (
      <ProductCard key={p.id} product={p} onClick={handleCardClick} />
    ))}
  </div>
</div>


      <ProductModal product={selectedProduct} onClose={closeModal} />

    
    </div>
  );
};

export default Services;
