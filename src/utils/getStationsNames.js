import getData from './getData';
import {
  TRANSPORT_FOR_LONDON_API_KEY,
  TRANSPORT_FOR_LONDON_ID,
} from '../constants';

const getStationsNames = () => {
  const stationsNamesURL = 'https://api.tfl.gov.uk/StopPoint/Mode/tube/Disruption?includeRouteBlockedStops=false';
  const api = `&app_key=${TRANSPORT_FOR_LONDON_API_KEY}&app_id=${TRANSPORT_FOR_LONDON_ID}`;
  const url = stationsNamesURL + api;

  return getData(url).then((names) => {
    // delete repeating values
    const stationNames = {};
    const result = [];

    names.forEach((descrip) => {
      if (!stationNames[descrip.atcoCode]) {
        stationNames[descrip.atcoCode] = true;
        result.push({
          option: descrip.commonName,
          value: descrip.atcoCode,
          id: descrip.atcoCode,
        });
      }
    });

    return result;
  });
};

export default getStationsNames;
