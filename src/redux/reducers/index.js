import { combineReducers } from 'redux';

import stateReducer from './stateReducer';
import todoReducer from './todoReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  state: stateReducer,
  filter: filterReducer,
  todos: todoReducer
});

export default rootReducer;
