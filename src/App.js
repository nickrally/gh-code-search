  
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Banner from './components/Banner'
import Search from './pages/Search'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Banner />
        <Route path="/" exact component={Search} />
      </BrowserRouter>
    )
  }
}

export default App