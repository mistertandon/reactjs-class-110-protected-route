import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use(
    (request) => {

        console.log('request', request);

        return request;
    },
    (error) => {

        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {

        console.log('response', response);
        return response;
    },
    (error) => {

        return Promise.reject(error);
    }
);

export default instance;