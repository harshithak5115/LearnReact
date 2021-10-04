import * as React from 'react'
import PropTypes, { resetWarningCache } from 'prop-types'
import { fetchWeather } from '../util/api'

 class Inputdata extends React.Component {
  

  handleChange=(event)=> {
    event.preventDefault();
    //this.setState({coordinate: event.target.value});
    this.props.onCoordinateChange(event.target.value)

  }

  
  render() {
    console.log("Inputdata",this.props)
    return (
        <React.Fragment>
        <label htmlFor='coordinate'>
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
    onCoordinateChange:PropTypes.func.isRequired
  }

export default class Userdata extends React.Component{

  state={
    longitude:'',
    latitude:'',
    result:'',
    loading:''
  }
  handleChange=(id,coordinate)=>{
    this.setState({
      [id]:coordinate
    })
  }

  handleLatitudeChange=(latitude)=>
  {
    this.setState({
      latitude:latitude
    })
  }
  handleLongitudeChange=(longitude)=>
  {
    this.setState({
      longitude:longitude
    })
  }

  handleSubmit=(event)=> {
   // alert('A name was submitted: ' + this.state.latitude+" "+this.state.longitude);
    event.preventDefault();
    this.setState({loading:true})
    fetchWeather(this.state.latitude,this.state.longitude)
    .then((temperature)=>{
      this.setState({
        loading:false,
        result:temperature
      })
    })
    
  }
  
  render(){
    //const {longitude,latitude}=this.state;
    console.log("Userdata",this.state)
    return(
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
         <Inputdata
          label='Latitude'
          onCoordinateChange={this.handleLatitudeChange}
          data={this.state.latitude}
          />
          <Inputdata
          label='Longitude'
          onCoordinateChange={this.handleLongitudeChange}
          data={this.state.longitude}
          /> 
        <button>
        <input type="submit" value="Submit" />
        </button>
        </form>
        {this.state.result && <div>The temperature is: {this.state.result} </div>}
        {this.state.loading && <div>loading....</div>}
      </React.Fragment>
    )

  }



}