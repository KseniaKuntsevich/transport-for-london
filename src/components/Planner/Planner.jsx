import React, {Component} from 'react';
import Form from '../Form';
import Journey from '../Journey';
import './Planner.scss';


class Planner extends Component {
  constructor(props){
  	super(props)
  	this.state = {}
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit({ from, to }) {
    console.log(from, to)
  }

  render() {
    return(
     	<div>
        <Form
          callback={this.onFormSubmit}
          inputs={[
            {
              type: "text",
              name: "from",
            },
            {
              type: "text",
              name: "to",
            },
            {
              value: "Get Plan",
              type: "submit",
              name: "submit",
            }
          ]}
          />
          <Journey options={{
            from: `51.509865,-0.118092`,
            to: `51.503164654,0.053166454`,
         }}/>
     	</div>
   )
  }
}


export default Planner;
