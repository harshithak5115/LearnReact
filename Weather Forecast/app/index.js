import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import Fetchdata from './util/api'
import { ThemeProvider } from './context/theme'
import Userdata from './component/userdata'
import Doctordata from './component/practo'
import Nav from './component/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReceipeData from './component/cocktail'

//const ReceipeData = React.lazy(() => import('./component/cocktail'))

class App extends React.Component {
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'light'
      }))
    }
  }
    
    render() {
      return (
        <Router>        
          <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className='container'>
          <Nav />

                <Switch>
                  <Route exact path='/' component={ReceipeData} />
                  <Route render={() => <h1>404</h1>} />
                </Switch>
              
                </div>
          </div>
        </ThemeProvider>
        </Router>
 
      )
    }
  }
  
  ReactDOM.render(
    <App/>,
    document.getElementById('app')
  )