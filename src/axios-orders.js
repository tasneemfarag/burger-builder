import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-3ffdf.firebaseio.com/'
});

export default instance;