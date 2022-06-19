import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:2000/api/tool-box-virtual/'
});

export default api;