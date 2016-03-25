import tdFootReducer from '../actions/todos/TDFootActions.js';
import tFootsReducer from '../actions/todos/TFootsActions.js';
import tFootReducer from '../actions/todos/TFootActions.js';
import tBodyReducer from '../actions/todos/TBodyActions.js';
import tHeadReducer from '../actions/todos/THeadActions.js';
import tdHeadReducer from '../actions/todos/TdHeadActions.js';
import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    todoList: reduceReducers(tdFootReducer, tFootsReducer, tFootReducer, tBodyReducer, tHeadReducer, tdHeadReducer)
});
export default rootReducer;