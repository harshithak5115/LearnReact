import * as React from 'react'
import PropTypes from 'prop-types'

export default function Menu ({ ID,avatar,name,instructions,ingredient1,ingredient2,ingredient3,ingredient4,ingredient5}) {
  return (
    
        <div className='card'>
            <img className='avatar'
            className='avatar'
            src={avatar}
            alt={`Avatar for ${name}`}
             />
          <h2 className='center-text'>
             {ID}
          </h2>
          <h2 className='center-text'>
              {name}
          </h2>
          <h2 className='center-text'>
              {instructions}
          </h2>
          <div>
              <h2 className='id-font'>Ingredients Used:</h2>
          <h3>
              {ingredient1}
          </h3>
          <h3>
              {ingredient2}
          </h3>
          <h3>
              {ingredient3}
          </h3>       
            <h3>
              {ingredient4}
          </h3>         
           <h3 >
              {ingredient5}
          </h3>
          </div>
        </div>
       
     
  )
}

Menu.propTypes = {
    ID:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    instructions:PropTypes.string,
    ingredient1:PropTypes.string,
    ingredient2:PropTypes.string,
    ingredient3:PropTypes.string,
    ingredient4:PropTypes.string,
    ingredient5:PropTypes.string
}