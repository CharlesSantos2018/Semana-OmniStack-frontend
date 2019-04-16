import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend11.herokuapp.com',
});

export default api;
