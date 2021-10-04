import * as React from 'react'
import PropTypes, { resetWarningCache } from 'prop-types'
import { fetchReceipe } from '../util/cocktailapi'
import Card from './card'
import Inputdata from './Inputdata'
import Menu from './Menu'

 function ReceipeCard({receipe_data}){
     return(
         <ul>
             { receipe_data.map((receipe,index)=>{
                 const {idDrink,str_Instructions,strDrinkThumb,strDrink,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5}=receipe
                 return(
                     <li key={index}>
                         <Menu
                            ID={idDrink}
                            avatar={strDrinkThumb}
                            name={strDrink}
                            instructions={str_Instructions}
                            ingredient1={strIngredient1}
                            ingredient2={strIngredient2}
                            ingredient3={strIngredient3}
                            ingredient4={strIngredient4}
                            ingredient5={strIngredient5}
                         >   
                         </Menu>
                     </li>
                        )
                })}
         </ul>
        )
 }
 ReceipeCard.propTypes={
    receipe_data:PropTypes.array.isRequired
 }
export default class ReceipeData extends React.Component{

  state={
    receipe:[],
    drinkname:'',
    loading:''
  }
  handleChange=(drinkname)=>
  {
    this.setState({
      drinkname:drinkname
    })
}


  handleSubmit=(event)=> {
   // alert('A name was submitted: ' + this.state.latitude+" "+this.state.longitude);
    event.preventDefault();
    console.log("handle submit works fine")
    this.setState({loading:true})
    fetchReceipe(this.state.drinkname)
    .then((receipe)=>{
      this.setState({
        loading:false,
        receipe
      })
    })
    
  }
  
  render(){
    //const {longitude,latitude}=this.state;
    console.log("Entered userdata")
    return(

      <React.Fragment>
            <h1 className='center-text'>Cocktail Receipe</h1>
            <form onSubmit={this.handleSubmit}>
            <Inputdata
            label='Drink Name'
            inputKey='Drink Name'
            onChange={this.handleChange}
            data={this.state.drinkname}
            />
            
            <button>
            <input type="submit" value="Submit" />
            </button>
            </form>
            {this.state.receipe && <ReceipeCard receipe_data={this.state.receipe}/>}
            {this.state.loading && <div>loading....</div>}
      </React.Fragment>
    )

  }

}