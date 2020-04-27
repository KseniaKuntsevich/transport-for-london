import { combineReducers } from 'redux';
import { plannerReducer } from './planner/reducer';
import { journeyReducer } from './journey/reducer';
import { transportLinesReducer } from './transportLines/reducer';

export default combineReducers({
  planner: plannerReducer,
  journey: journeyReducer,
  transportLines: transportLinesReducer,
});
