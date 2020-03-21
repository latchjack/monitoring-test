import React from 'react'
import './App.css'
import 'bulma/css/bulma.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import FilmIndex from './components/shows/FilmIndex'
import FilmShow from './components/shows/FilmShow'
import Navbar from './components/common/Navbar'
import TimeIndex from './components/times/TimeIndex'

const App = () => (
  <BrowserRouter>
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/films/:name" component={FilmShow} />
        <Route path="/films" component={FilmIndex} />
        <Route path="/times" component={TimeIndex} />
      </Switch>
    </>
  </BrowserRouter>
)

export default App;
