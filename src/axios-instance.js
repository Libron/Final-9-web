import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://quotes-project-7a93a.firebaseio.com/'
});

export default instance;