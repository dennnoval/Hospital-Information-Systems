import React from 'react'
import { Link } from 'react-router-dom'

export default function Login () {
  return (
    <main id="Login">
      <div class="container">
      	<div class="row justify-content-center mt-5 mb-3 mx-2">
      		<h2>Hospital Information Systems</h2>
      	</div>
      	<div class="row justify-content-center">
	      	<div class="col-md-5 px-0">
		        <div class="card">
		          <div class="card-body">
		            <h3>Login</h3>
		            <form>
		              <div class="form-group">
                    <label for="email1">Email address</label>
                    <input type="email" id="email1" class="form-control" aria-describedby="emailHelp"/>
                  </div>
                  <div class="form-group">
                    <label for="email1">Password</label>
                    <input type="password" id="email1" class="form-control" />
                  </div>
                  <button type="submit" class="btn btn-primary">Login</button>
		            </form>
		            <br/>
		            <span>Don't have account ? <Link to="">Register</Link></span>
		          </div>
		        </div>
		      </div>
		    </div>
      </div>
    </main>
  )
}
