import * as React from 'react'
import PropTypes, { resetWarningCache } from 'prop-types'
import { fetchDoctor } from '../util/api'
import Card from './card'
import Inputdata from './Inputdata'

 function DoctorsCard({doctors}){
     return(
         <ul>
             { Object.keys(doctors).map((doctorId)=>{
                 const {doctor_id,profile_photo,doctor_name,experience_years,consultation_fees,locality}=doctors[doctorId]
                 return(
                     <li key={doctorId}>
                         <Card
                         ID={doctor_id}
                         avatar={profile_photo}
                         name={doctor_name}
                         year={experience_years}
                         fee={consultation_fees}
                         locality={locality}
                         >   
                         </Card>
                     </li>
                        )
                })}
         </ul>
        )
 }
 DoctorsCard.propTypes={
     doctors:PropTypes.object.isRequired
 }
export default class Doctordata extends React.Component{

  state={
    doctors:{},
    city:'',
    specialisation:'',
    category:'',
    loading:''
  }
  handleChange=(id,userip)=>{
    this.setState({
      [id]:userip
    })
  }


  handleSubmit=(event)=> {
   // alert('A name was submitted: ' + this.state.latitude+" "+this.state.longitude);
    event.preventDefault();
    this.setState({loading:true})
    fetchDoctor(this.state.city,this.state.specialisation,this.state.category)
    .then((doctors)=>{
      this.setState({
        loading:false,
        doctors
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
            label='City'
            inputKey='city'
            onChange={this.handleChange}
            data={this.state.city}
            />
            <Inputdata
            label='Specialisation'
            inputKey='specialisation'
            onChange={this.handleChange}
            data={this.state.specialisation}
            /> 
            <Inputdata
            label='Category'
            inputKey='category'
            onChange={this.handleChange}
            data={this.state.category}
            />
            <button>
            <input type="submit" value="Submit" />
            </button>
            </form>
            {this.state.doctors && <DoctorsCard doctors={this.state.doctors}/>}
            {this.state.loading && <div>loading....</div>}
      </React.Fragment>
    )

  }

}