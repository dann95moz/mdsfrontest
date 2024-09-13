import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3100/images',
  timeout: 10000, // Tiempo de espera en milisegundos
  headers: {
    'Content-Type': 'application/json',
   
  },
});

// Interceptor para manejar errores globalmente
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Aquí puedes manejar errores globalmente, por ejemplo:
    if (error.response) {
      // El servidor respondió con un código de estado fuera del rango 2xx
      console.error('Error de respuesta:', error.response.data);
    } else if (error.request) {
      // La petición fue hecha pero no se recibió respuesta
      console.error('Error de red:', error.request);
    } else {
      // Algo sucedió en la configuración de la petición que provocó un error
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;