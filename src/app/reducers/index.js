import { combineReducers } from 'redux';
import auth from './auth';
import followingUsers from './followingUsers';
import timeline from './timeline';

const rootReducer = combineReducers({ auth, followingUsers, timeline });

export const mainReducer = (state, action) => {
    return rootReducer(state, action);
};
