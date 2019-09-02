import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://build-burger-react.firebaseio.com/'
});

export default instance;