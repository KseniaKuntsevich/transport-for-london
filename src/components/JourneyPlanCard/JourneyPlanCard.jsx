import React from 'react';
import './JourneyPlanCard.scss';
import Timeline from '../Timeline';
import Steps from './Steps';
import Fare from './Fare';


const JourneyPlanCard = ({ data }) => { 
  const { startDateTime, arrivalDateTime, duration, fare, legs } = data
  console.log(data)
  return (
    <div>
      {data.duration}
      <Timeline start={startDateTime} end={arrivalDateTime} />
      { fare ? <Fare amount={fare.totalCost} chargeLevel={fare.fares[0].chargeLevel} /> : '' }
      <Steps data={legs} />
    </div>
)};


export default JourneyPlanCard;
