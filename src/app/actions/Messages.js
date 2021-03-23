import {
    TIMELINE_LOADING_START,
    TIMELINE_LOADING_SUCCESS,
    TIMELINE_LOADING_ERROR,
} from 'constants/ActionTypes';
import { MessagesService } from 'services';

export function getMessages(username) {
    return (dispatch, getState) =>
        new Promise((resolve, reject) => {
            dispatch({ type: TIMELINE_LOADING_START });
            let finalUser = username;
            if (!username) {
                finalUser = getState().auth?.authUser?.username;
                if (!finalUser) return reject();
            }
            MessagesService.getMessages(finalUser, !username)
                .then((data) => {
                    dispatch({
                        type: TIMELINE_LOADING_SUCCESS,
                        messages: data,
                        userTimeline: finalUser,
                    });
                    resolve(data);
                })
                .catch((error) => {
                    dispatch({ type: TIMELINE_LOADING_ERROR });
                    reject(error);
                });
        });
}

export function createMessage(message) {
    return (dispatch, getState) =>
        new Promise((resolve, reject) => {
            const idUser = getState().auth?.authUser?.id;
            MessagesService.createMessage(message, idUser)
                .then(() => {
                    dispatch(getMessages());
                    resolve();
                })
                .catch(reject);
        });
}
