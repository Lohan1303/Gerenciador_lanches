import axios from 'axios';

const api = axios.create(
    {
         //baseURL: 'http://192.168.1.10:3000',
        baseURL :'http://10.1.63.41:3000',
        //baseURL: 'http://192.168.101.19:3000'
    }
);

export default api;