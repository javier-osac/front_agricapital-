import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleVerMasClick = () => {
    navigate('/productos');
  };

  return (
    <div className="page-wrapper"> {/* Cambiado a clase que controlará layout */}

      <main className="main-content"> {/* Aquí irá el contenido que empuja el footer */}
        {/* Sección 1: Imagen de fondo y título */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>“TU ALIADO EN CRECIMIENTO SOSTENIBLE”</h1>
          </div>
          <a href="#productos" className="scroll-down">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14m0 0l-6-6m6 6l6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14m0 0l-6-6m6 6l6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14m0 0l-6-6m6 6l6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            
            
          </a>
        </section>

        {/* Sección 2: Lo que ofrecemos */}
        <section id="productos" className="products-section">
          <h2>Lo que ofrecemos</h2>
          <div className="product-cards">
            <div className="card">
              <img src="/herramienta.png" alt="Herramientas" />
              <h3>Herramientas</h3>
            </div>
            <div className="card">
              <img src="/abonar.png" alt="Abonos" />
              <h3>Abonos</h3>
            </div>
            <div className="card">
              <img src="semilla.png" alt="Semillas" />
              <h3>Semillas</h3>
            </div>
          </div>
          <Link className="btn-ver-mas" to="/services">Ver más</Link>
        </section>
      </main>

    
    </div>
  );
};

export default Home;
