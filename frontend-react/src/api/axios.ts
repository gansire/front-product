import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.API_URL_PRODUCT,
});

api.interceptors.response.use(
  res => res,
  err => {
    if (err.response?.status === 401) {
      console.warn('Não autorizado');
    }
    return Promise.reject(err);
  }
);

export default api;