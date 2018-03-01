import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Train from './train'
import myTheme from './theme'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <ThemeProvider theme={myTheme}>
            <Train />
          </ThemeProvider>
        </Router>
      </div>
    )
  }
}

export default App
