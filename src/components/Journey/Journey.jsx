import React, {Component} from 'react';
import './Journey.scss';
import getJourney from '../../utils/getJourney';
import JourneyPlanCard from '../JourneyPlanCard';



class Journey extends Component {
  constructor(options){ // options = { from, to, time (optional) , date (optional) } 
  	super(options)
  	this.state = {
      journeys: JSON.parse(localStorage.getItem('journeys')) || null //--
    };
  }


  componentDidMount() {
    if(this.state.journeys) { return } //---
    const { from, to, time, date } = this.props.options
    getJourney({ from, to, time, date })
    .then(journeys => {
      this.setState({ journeys })
      localStorage.setItem('journeys', JSON.stringify(journeys) ) //--
    }) 

  }


  render() {
    const { journeys } = this.state
    return(
     	<div>
        {
          journeys ?
          journeys.map((data, i) => 
            <JourneyPlanCard data={data} key={i} />
          ) :
          'waiting ...'
        }
     	</div>
   )
  }

}


export default Journey;
