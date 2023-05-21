import axiosInstance from './../config/axiosConfig';

class UserAuth {

    constructor() {

    }

    setToken(token, cb) {

        localStorage.setItem('devEdToken', token);
        cb();
    }

    async getToken() {

        const token = localStorage.getItem('devEdToken');

        const result = await axiosInstance(
            {
                method: 'get',
                url: 'http://localhost:3001/api/user/profile',
                headers: {
                    'auth-token': token
                }
            }
        );

        return result.status == 200 ? true : false;
    }

    deleteToken() {

    }
}

export default new UserAuth();