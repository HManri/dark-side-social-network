import {
    USERS_FOLLOWING_START,
    USERS_FOLLOWING_SUCCESS,
    USERS_FOLLOWING_ERROR,
    LOGOUT,
} from 'constants/ActionTypes';

const initialState = {
    loading: false,
    error: false,
    users: [],
};

export default function reduce(state = initialState, action) {
    switch (action.type) {
        case USERS_FOLLOWING_START:
            return { ...initialState, loading: true, error: false };
        case USERS_FOLLOWING_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                users: action.data,
            };
        case USERS_FOLLOWING_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                users: [],
            };
        case LOGOUT:
            return { ...initialState };
        default:
            return state;
    }
}
