import axios from 'axios';
import {AsyncStorage} from 'react-native';

const instance = axios.create({
    baseURL: 'https://b0f5f606b4f2.ngrok.io'
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if(token) {
            config.headers.Authorization=`Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;