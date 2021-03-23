import {
    TIMELINE_LOADING_START,
    TIMELINE_LOADING_SUCCESS,
    TIMELINE_LOADING_ERROR,
    LOGOUT,
} from 'constants/ActionTypes';

const initialState = {
    loading: false,
    error: false,
    messages: [],
    userTimeline: -1,
};

export default function reduce(state = initialState, action) {
    switch (action.type) {
        case TIMELINE_LOADING_START:
            return { ...initialState, loading: true, error: false };
        case TIMELINE_LOADING_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                messages: action.messages,
                userTimeline: action.userTimeline || -1,
            };
        case TIMELINE_LOADING_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                messages: [],
                userTimeline: action.userTimeline || -1,
            };
        case LOGOUT:
            return { ...initialState };
        default:
            return state;
    }
}
