import React from 'react';
import './Fare.scss';


const Fare = ({ amount, chargeLevel }) => (
  <div>
    £ {(amount/100).toFixed(2)} {chargeLevel}
  </div>
);


export default Fare;
