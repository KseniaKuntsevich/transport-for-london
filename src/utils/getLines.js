import getData from './getData';
import {
  TRANSPORT_FOR_LONDON_API_KEY,
  TRANSPORT_FOR_LONDON_ID,
} from '../constants';

const stationsNamesURL = 'https://api.tfl.gov.uk/StopPoint/';
const api = `/Route?app_key=${TRANSPORT_FOR_LONDON_API_KEY}&app_id=${TRANSPORT_FOR_LONDON_ID}`;

const getLines = (id) => {
  const url = stationsNamesURL + id + api;
  return getData(url).then((data) => data.map((descrip) => {
    const { lineString, routeSectionName } = descrip;
    const stantionsNames = routeSectionName.split('-');
    return {
      lineCoordinates: JSON.parse(lineString)[0],
      from: stantionsNames[0],
      to: stantionsNames[1],
    };
  }));
};

export default getLines;
