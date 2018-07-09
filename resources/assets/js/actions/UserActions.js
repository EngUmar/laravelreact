import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './AlertActions';
import { history } from '../helpers';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { BASE_URL } from '../constants/Config';

export const userActions = {
    register,
};


function register(user) {
    return dispatch => {
        dispatch(request(user));
        userService.register(user)
        .then(
            userData => {
                dispatch(success(userData));
                $('.longinRgstrModel').click();
                history.push('/account');
            },
            errorCode => {
                console.log(errorCode);
                const error = handleErrorResponse(errorCode);
                dispatch(failure(error));
                dispatch(alertActions.error(error));
               }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function handleErrorResponse(errorCode) {
    switch (errorCode) {
        case 401:
            return 'Your Credentials do not match our records.';
            break;

        case 422:
            return 'The Email has already been taken. OR The password must be at least 6 characters.';
            break;
        default:
            return 'Something went wrong. Please try again!';
            break;
    }
}