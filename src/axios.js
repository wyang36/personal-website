import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://personal-website-b958a.firebaseio.com'
});

//instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;