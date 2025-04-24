import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouterConfig from './router';
import './App.css'; 
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter as Router } from 'react-router-dom'; // Agregar Router aquí

const App = () => {
  return (
    <Router> {/* Aquí se agrega el Router */}
      <div className="app-wrapper">
        <Header />
        <main className="flex-grow-1">
          <RouterConfig />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
