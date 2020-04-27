import getData from './getData';
import {
  TRANSPORT_FOR_LONDON_API_KEY,
  TRANSPORT_FOR_LONDON_ID,
} from '../constants';

const stationsNamesURL = 'https://api.tfl.gov.uk/StopPoint/Mode/tube/Disruption?includeRouteBlockedStops=false';
const api = `&app_key=${TRANSPORT_FOR_LONDON_API_KEY}&app_id=${TRANSPORT_FOR_LONDON_ID}`;
const url = stationsNamesURL + api;

const getStations = () => {
  const stationsNames = localStorage.getItem('stationsNames');
  if (stationsNames) {
    return Promise.resolve(JSON.parse(stationsNames));
  }

  return getData(url).then((data) => {
    localStorage.setItem('stationsNames', JSON.stringify(data));
    return data;
  });
};

export default getStations;
