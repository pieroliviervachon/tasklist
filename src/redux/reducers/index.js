import {combineReducers} from 'redux';
import {taskList} from './taskList';

export const rootReducers = combineReducers({
  taskList,
});
