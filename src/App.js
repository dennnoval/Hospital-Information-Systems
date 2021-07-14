import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Login, PatientDashboard } from './pages'

export default function App () {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/patient" component={PatientDashboard}/>
      </Switch>
    </Router>
  )
}
