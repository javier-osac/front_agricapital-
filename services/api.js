import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3000/api", // Asegúrate que este sea el puerto correcto
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export default api;