import axios from 'axios';
import AuthService from './auth/AuthService';

const Auth = new AuthService();
const instance = axios.create({
    baseURL: 'http://localhost:5600/'
});

// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
// instance.defaults.headers.common['Authorization'] = Auth.getToken();


// instance.interceptors.request...

export default instance;
