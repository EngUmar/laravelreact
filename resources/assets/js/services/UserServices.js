import { authHeader, commonHeader } from '../helpers';
import { BASE_URL } from '../constants/Config';
import { baseURL } from '../constants/Api';
import {  tourilyRegister, TOURILY_USER } from '../constants/Api';

export const userService = {
    register,
};


function register(user) {

    const userData = JSON.stringify({
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
        password: user.password,
        record_type_id: user.reg_role
    });
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: userData
    };

    return fetch(tourilyRegister, requestOptions)
    .then(response => {
        if (response.status != 200) {
            return Promise.reject(response.status);
        }
        return response.json();
    })
    .then(tokenData => {
        localStorage.setItem('access_token', tokenData.access_token);
        return 1;
    })
}

