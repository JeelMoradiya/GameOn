import React from "react";
import { NavLink } from "react-router-dom";

const Login = () =>{
    return (<>
<section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-5-strong" id="d1">
          <div className="card-body p-4 text-center">

            <h1 className="mb-5 text-success">Sign In</h1>

            <div className="form-outline mb-4">
              <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder="Email" />
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder="Password" />
            </div>

         
            <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label" for="form1Example3"> Remember password </label>
            </div>

            <button className="btn btn-primary btn-lg btn-block float-start" type="submit">Login</button><br/><br/><NavLink to="">Forget Password?</NavLink>
            <hr className="my-4"/>

            <button className="btn btn-lg btn-block btn-danger" id="b1"
              type="submit"><i className="fab fa-google"></i><b>G&emsp;|&emsp;&emsp;</b> Sign in with google</button><br/><br/>
            <button className="btn btn-lg btn-block btn-primary" id="b2"
              type="submit"><i className="fab fa-facebook-f"></i><b>f&emsp;|&emsp; </b> Sign in with facebook</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>)
}
export default Login;