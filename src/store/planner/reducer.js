import * as types from './actionsTypes';

const defaultData = {
  stationsNames: null,
  journeyOptions: {},
};

export const plannerReducer = (state = defaultData, action) => {
  switch (action.type) {
    case types.PLANNER_CHANGE_STOP_POINT_NAMES:
      return {
        ...state,
        stationsNames: action.payload,
      };
    case types.PLANNER_CHANGE_JOURNEY_OPTIONS:
      return {
        ...state,
        journeyOptions: action.payload,
      };
    default:
      return state;
  }
};
