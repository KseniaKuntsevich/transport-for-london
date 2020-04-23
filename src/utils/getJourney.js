import getData from "./getData";
import {
  TRANSPORT_FOR_LONDON_API_KEY,
  TRANSPORT_FOR_LONDON_ID,
} from "../constants";
import getLondonTimeHHmm from "./getLondonTimeHHmm";
import getLondonDateyyyyMMdd from "./getLondonDateyyyyMMdd";

const getJourney = ({
  from, // "lat,long"
  to, // "lat,long"
  time = getLondonTimeHHmm(), // 2203
  date = getLondonDateyyyyMMdd(), // 20200423
}) => {
  const x = from.split(",").join("%2C");
  const y = to.split(",").join("%2C");
  const journeyURL = "https://api.tfl.gov.uk/Journey/JourneyResults/";
  const coords = `${x}/to/${y}`;
  const dateTime = `?date=${date}&time=${time}`;
  const api = `&app_key=${TRANSPORT_FOR_LONDON_API_KEY}&app_id=${TRANSPORT_FOR_LONDON_ID}`;
  const url = journeyURL + coords + dateTime + api;

  return getData(url).then((data) => data.journeys);
};

export default getJourney;
