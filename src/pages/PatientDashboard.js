import React from 'react'
import { Link, Switch, Route, Redirect } from 'react-router-dom'

import { AppointmentList, AppliedAppointment } from '../components'

export default function PatientDashboard ({ match }) {
	let { path } = match
  return (
  	<main id="PatientDashboard">
  	  <div className="container">
  	  	<div className="row justify-content-center mt-5 mb-3 mx-2">
				  <div className="col-md-3">
				    <div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
				      <Link to={`${path}/appointment-list`} className="nav-link active" data-toggle="pill">Appointment List</Link>
				      <Link to={`${path}/applied-appointment`} className="nav-link" data-toggle="pill">Applied Appointment</Link>
				    </div>
				  </div>
				  <div className="col-md-9">
				    <div className="tab-content">
				    	<Switch>
				    		<Route path={`${path}/appointment-list`} component={AppointmentList} />
				    		<Route path={`${path}/applied-appointment`} component={AppliedAppointment} />
				    		<Redirect from="/patient" to="/patient/appointment-list"/>
				    	</Switch>
				    </div>
				  </div>
				</div>
  	  </div>
  	</main>
  )
}
