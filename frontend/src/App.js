import React from 'react'
import './App.css'
import 'bulma'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import './stylesheets/main.scss'

import Home from './components/common/Home'
import FilmIndex from './components/shows/FilmIndex'
import FilmShow from './components/shows/FilmShow'
import Navbar from './components/common/Navbar'

const App = () => (
  <BrowserRouter>
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/films/:name" component={FilmShow} />
        <Route path="/films" component={FilmIndex} />
      </Switch>
    </>
  </BrowserRouter>
)

export default App;
