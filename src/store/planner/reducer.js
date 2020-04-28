import * as types from './actionsTypes';

const defaultData = {
  stationsNames: null,
  journeyOptions: null,
  isLoading: false,
};

export const plannerReducer = (state = defaultData, action) => {
  switch (action.type) {
    case types.PLANNER_CHANGE_STATIONS_NAMES:
      return {
        ...state,
        stationsNames: action.payload,
      };
    case types.PLANNER_CHANGE_JOURNEY_OPTIONS:
      return {
        ...state,
        journeyOptions: action.payload,
      };
    case types.PLANNER_CHANGE_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};
