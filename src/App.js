import React from 'react'
import Navigation from './Components/Navigation'
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import Pages from './Components/Pages'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/service' component={Service}/>
        <Route exact path='/page' component={Pages}/>
        <Route exact path='/blog' component={Blog}/>
        <Route exact path='/contact' component={Contact}/>
      </div>
    </BrowserRouter>
  )
}

export default App
