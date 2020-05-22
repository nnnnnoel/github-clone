import Axios from 'axios';

const api = Axios.create({
  baseURL: 'http://localhost:3000',
});

api.interceptors.request.use(
  (config) => {
    // console.log('config', config);
    return config;
  },
  (error) => {
    console.warn('request Error', error);
  }
);

export default api;
