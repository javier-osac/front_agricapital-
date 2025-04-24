import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Services from './pages/Services';
import Home from './pages/Home';

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default RouterConfig;
