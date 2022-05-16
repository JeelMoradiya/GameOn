import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import web from "../src/image/img1.png";
const Home = () =>{
    return (<>
            <section id="header"className="">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                                <h1>Grow Your Games
                                <strong className="brand-name">GameOn</strong>
                                </h1>
                                <h2 className="my-3">
                                    Many Outdoor Games Deteil Our Websit
                                </h2>
                                <div className="mt-3">
                                    <NavLink to="/login"className="btn-get-started btn btn-outline-info ">GET STARTED</NavLink>
                                </div>
                            </div>

                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={web} className="img-fluid animated" alt="home img"/>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                </div>
            </section>
       </> );
}
export default Home;