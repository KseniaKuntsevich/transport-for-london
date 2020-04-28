import { combineReducers } from 'redux';
import { plannerReducer } from './planner/reducer';
import { transportLinesReducer } from './transportLines/reducer';
import { menuReducer } from './menu/reducer';

export default combineReducers({
  planner: plannerReducer,
  transportLines: transportLinesReducer,
  menu: menuReducer,
});
