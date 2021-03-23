import {
    USERS_FOLLOWING_START,
    USERS_FOLLOWING_SUCCESS,
    USERS_FOLLOWING_ERROR,
} from 'constants/ActionTypes';
import { UsersService } from 'services';
import { getMessages } from 'actions/Messages';

export function getFollowingUsers() {
    return (dispatch, getState) =>
        new Promise((resolve, reject) => {
            const authId = getState().auth?.authUser?.id;
            if (!authId) return reject();
            dispatch({ type: USERS_FOLLOWING_START });
            UsersService.getFollowingUsers(authId)
                .then((data) => {
                    dispatch({ type: USERS_FOLLOWING_SUCCESS, data });
                    resolve(data);
                })
                .catch((error) => {
                    dispatch({ type: USERS_FOLLOWING_ERROR });
                    reject(error);
                });
        });
}

export function searchUsers(text) {
    return (dispatch, getState) =>
        new Promise((resolve, reject) => {
            const authId = getState().auth?.authUser?.id;
            if (!authId) return reject();

            // adding some mistery here... we are searching, so simulate it
            setTimeout(() => {
                UsersService.searchUsers(text, authId).then(resolve).catch(reject);
            }, 800);
        });
}

export function followUser(idUser) {
    return (dispatch, getState) =>
        new Promise((resolve, reject) => {
            const authId = getState().auth?.authUser?.id;
            if (!authId) return reject();
            UsersService.followUser(idUser, authId);
            dispatch(getFollowingUsers());
            dispatch(getMessages());
        });
}

export function getUserInfo(username) {
    return () => UsersService.getUserInfo(username);
}
