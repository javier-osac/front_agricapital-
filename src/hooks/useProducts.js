import { useState, useEffect } from 'react';
import api from '../../services/api';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        const productsData = response.data;
        
        // Mapeamos los datos para asegurar consistencia
        const formattedProducts = productsData.map(product => ({
          id: product.id,
          name: product.product_name, // Normalizamos a 'name'
          category: product.category,
          price: parseFloat(product.price), // Convertimos a número
          imageUrl: product.image_url,
          discount: product.descuento,
          finalPrice: parseFloat(product.precio_final)
        }));
        
        setProducts(formattedProducts);
      } catch (err) {
        setError({
          message: err.response?.data?.message || err.message || 'Error al cargar productos'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;