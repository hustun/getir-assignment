import axios from 'axios';

const http = axios.create({
  baseURL: 'https://hustun-mock-server.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;
