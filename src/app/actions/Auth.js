import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGIN_RESET,
    LOGOUT,
} from 'constants/ActionTypes';
import { AuthService } from 'services';

export function login(username) {
    return (dispatch) =>
        new Promise((resolve, reject) => {
            dispatch({ type: LOGIN_START });
            AuthService.login(username)
                .then((user) => {
                    dispatch({ type: LOGIN_SUCCESS, authUser: user });
                    resolve();
                })
                .catch((error) => {
                    dispatch({ type: LOGIN_ERROR });
                    reject(error);
                });
        });
}

export function resetLogin() {
    return (dispatch) => {
        dispatch({ type: LOGIN_RESET });
    };
}

export function logout() {
    return (dispatch) => {
        dispatch({ type: LOGOUT });
        return Promise.resolve();
    };
}
