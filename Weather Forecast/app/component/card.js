import * as React from 'react'
import PropTypes from 'prop-types'

export default function Card ({ ID,avatar,name,year,fee,locality}) {
  return (
    
        <div >
            <img
            className='avatar-img'
            src={avatar}
            alt={`Avatar for ${name}`}
             />
          <h2>
             {ID}
          </h2>
          <h2>
              {name}
          </h2>
          <h2>
              {year}
          </h2>
          <h2>
              {fee}
          </h2>
          <h2 >
              {locality}
          </h2>
          
        </div>
       
     
  )
}

Card.propTypes = {
  ID: PropTypes.number.isRequired,
  fee: PropTypes.number,
  avatar: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  locality:PropTypes.string.isRequired
}