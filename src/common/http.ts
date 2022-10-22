import axios from 'axios';

const http = axios.create({
  baseURL: 'https://jellyfish-app-k9ty5.ondigitalocean.app/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;
