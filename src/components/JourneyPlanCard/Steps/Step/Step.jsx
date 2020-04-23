import React from 'react';
import './Step.scss';
import Timeline from '../../../Timeline';



const Step = ({ data }) => { 
  console.log(data)
  const { 
  	duration,
  	departureTime,
  	arrivalTime,
  	departurePoint,
  	arrivalPoint,
  	path 
  } = data
  return (
	<div>
	  {duration} min
      <Timeline start={departureTime} end={arrivalTime} />
      {departurePoint.commonName}
      {` - `}
      {arrivalPoint.commonName}
      Stop points: 
      {path.stopPoints.map((stopPoint) => <div key={stopPoint.id}>{stopPoint.name}</div>)}
	</div>
)};

export default Step;
