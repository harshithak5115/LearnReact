import * as React from 'react'
import PropTypes, { resetWarningCache } from 'prop-types'

export default class Inputdata extends React.Component {
  

    handleChange=(event)=> {
      event.preventDefault();
      //this.setState({coordinate: event.target.value});
      this.props.onChange(event.target.value)
      console.log("Handle change event was called")
  
    }
  
    
    render() {
      //console.log("Inputdata",this.props)
      return (
          <React.Fragment>
          <label htmlFor='inputdata'>
            {this.props.label}
            </label>
            <div>
            <input type='text'
            id={this.props.label}
            placeholder={this.props.label}
            value={this.props.data} 
            onChange={this.handleChange} /> 
        </div>
        </React.Fragment>
       
      );
    }
    
  
    }
    Inputdata.propTypes={
      label:PropTypes.string.isRequired,
      data:PropTypes.string.isRequired,
      onChange:PropTypes.func.isRequired,
      inputKey:PropTypes.string.isRequired
    }
  