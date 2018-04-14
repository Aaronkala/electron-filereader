import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Train from './train'
import Search from './search'
import myTheme from './theme'
import Navigation from './components/navigation'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <ThemeProvider theme={myTheme}>
            <div>
              <Navigation />
              <Route
                exact
                path="/"
                render={() => (
                  <div>
                    <h1>Welcome</h1>
                    <p>Search for people in images on your computer.</p>
                    <p>Start from the "Train" page</p>
                  </div>
                )}
              />
              <Route exact path="/train" component={Train} />
              <Route exact path="/search" component={Search} />
            </div>
          </ThemeProvider>
        </Router>
      </div>
    )
  }
}

export default App
