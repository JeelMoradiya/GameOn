import React from "react";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contactus from "./Contactus";
import Login from "./Login";
import Navbar from "./Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import { Switch,Route,Redirect } from "react-router-dom";
const App = () =>{
    return (<>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/contactus" component={Contactus}/>
                <Route exact path="/login" component={Login}/>
                <Redirect to="/" />
            </Switch>
        </>)
}
export default App;