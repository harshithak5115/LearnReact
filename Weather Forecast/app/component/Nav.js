import * as React from 'react'
import { ThemeConsumer } from '../context/theme'
import { NavLink } from 'react-router-dom'

const activeStyle = {
  color: 'rgb(187, 46, 31)'
}

export default function Nav () {
  console.log("Entered nav")
  return (
    
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className='row space-between'>
          <ul className='row nav'>
            <li>
              <NavLink
                to='/'
                exact
                activeStyle={activeStyle}
                className='nav-link'>
                  Cocktail
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/receipe'
                activeStyle={activeStyle}
                className='nav-link'>
                  Receipelist
              </NavLink>
            </li>
          </ul>
          <button
            style={{fontSize: 30}}
            className='btn-clear'
            onClick={toggleTheme}
          >
            {theme === 'light' ? '🔦' : '💡'}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  )
}