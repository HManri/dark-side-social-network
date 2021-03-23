import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGIN_RESET,
    LOGOUT,
} from 'constants/ActionTypes';

const initialState = {
    loading: false,
    error: false,
    authUser: null,
};

export default function reduce(state = initialState, action) {
    switch (action.type) {
        case LOGIN_START:
            return { ...initialState, loading: true, error: false };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                authUser: action.authUser,
            };
        case LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                authUser: null,
            };
        case LOGIN_RESET:
            return { ...state, loading: false, error: false };
        case LOGOUT:
            return { ...initialState };
        default:
            return state;
    }
}
