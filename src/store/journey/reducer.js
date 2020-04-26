import * as types from './actionsTypes';

const defaultData = {
  journeyData: null,
};

export const journeyReducer = (state = defaultData, action) => {
  switch (action.type) {
    case types.JOURNEY_CHANGE_JOURNEY_DATA:
      return {
        ...state,
        journeyData: action.payload,
      };
    default:
      return state;
  }
};
