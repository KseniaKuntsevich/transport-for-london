import * as types from './actionsTypes';

export const changeTransportLinesStationsNames = (stationsNames) => ({
  type: types.TRANSPOT_LINES_CHANGE_STATIONS_NAMES,
  payload: stationsNames,
});

export const changeTransportLinesData = (data) => ({
  type: types.TRANSPOT_LINES_CHANGE_LINES_DATA,
  payload: data,
});
