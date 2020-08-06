import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:9876'
});


export default api;