import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './component/Header'
import Section from './component/Section'
import Footer from './component/Footer'
import './App.css'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header className="header"/>
          <Section />
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App
