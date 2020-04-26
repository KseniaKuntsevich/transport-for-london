import * as types from './actionsTypes';

export const changeJourneyData = (journeyData) => ({
  type: types.JOURNEY_CHANGE_JOURNEY_DATA,
  payload: journeyData,
});
