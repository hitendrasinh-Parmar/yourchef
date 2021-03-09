import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://your-chef-c5f25.firebaseio.com/'
});

export default instance;