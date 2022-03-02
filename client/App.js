import React from 'react'
import Routes from './Routes'
import Nav from './components/Nav'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Work'
import Contacts from './components/contact/Contact'

const App = () => {
  return (
    <div className="app">
      <Nav />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Contacts />
      </div>
    </div>
  )
}

export default App
