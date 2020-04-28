import getStations from './getStations';

const getStationsNames = () => getStations().then((names) => {
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

export default getStationsNames;
