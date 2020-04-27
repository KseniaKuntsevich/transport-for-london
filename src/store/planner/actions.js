import * as types from './actionsTypes';

export const changePlannerStationsNames = (stationsNames) => ({
  type: types.PLANNER_CHANGE_STATIONS_NAMES,
  payload: stationsNames,
});

export const changePlannerJourneyOptions = (journeyOptions) => ({
  type: types.PLANNER_CHANGE_JOURNEY_OPTIONS,
  payload: journeyOptions,
});
