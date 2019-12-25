  
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import Search from './pages/Search'
import About from './pages/About'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact component={Search} />
        <Route path="/about" exact component={About} />
      </BrowserRouter>
    )
  }
}

export default App