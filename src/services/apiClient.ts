import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6041937c7f50e000173aa990.mockapi.io/api/v1'
});

export default api;
