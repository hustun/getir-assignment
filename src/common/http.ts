import axios from 'axios';

const http = axios.create({
  baseURL: 'https://mock-backend-production.up.railway.app/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;
