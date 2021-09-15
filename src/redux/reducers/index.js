import { combineReducers } from 'redux';
import courseCategoryReducer from './category';
import courseReducer from './fetch-course';

const store = combineReducers({
    courseCategoryReducer,
    courseReducer,
});
export default store;