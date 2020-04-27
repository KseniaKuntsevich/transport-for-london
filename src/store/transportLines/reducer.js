import * as types from './actionsTypes';

const defaultData = {
  stationsNames: null,
  linesData: null,
};

export const transportLinesReducer = (state = defaultData, action) => {
  switch (action.type) {
    case types.TRANSPOT_LINES_CHANGE_STATIONS_NAMES:
      return {
        ...state,
        stationsNames: action.payload,
      };
    case types.TRANSPOT_LINES_CHANGE_LINES_DATA:
      return {
        ...state,
        linesData: action.payload,
      };
    default:
      return state;
  }
};
