import { combineReducers } from 'redux';

import posts from './posts';

export const reducers = combineReducers({ posts }); //key ==value therefore only mentioning 1 time posts