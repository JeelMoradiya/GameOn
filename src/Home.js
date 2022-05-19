import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import web from "../src/image/img1.jpg";
import we from "../src/image/img2.jpg";

const Home = () =>{
    return (<>
            <section id="header"className="">
                <div className="container-fluid nav_bg g-0">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                                <h1>Grow Your Business
                                <strong className="brand-name text-primary">Rutvi Clothing</strong>
                                </h1>
                                <h2 className="my-3">
                                    Many Business Deteil Our Websit
                                </h2>
                                <div className="mt-3">
                                    <NavLink to="/login"className="btn-get-started btn btn-outline-primary ">GET STARTED</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <div id="newsfeed">
                                    <div id="carone" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-indicators">
                                            <button type="button" data-bs-target="#Indicators" data-bs-slide-to="0" className="active"
                                                aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#Indicators" data-bs-slide-to="1"
                                                aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#Indicators" data-bs-slide-to="2"
                                                aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={web} className="img-fluid animated d-block w-100"/>
                                            <div className="carousel-caption d-none d-md-block">
                                                <h1>Welcome to GAME ON!</h1>
                                                <p>All sports related news at one place</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={we} className="img-fluid animated d-block w-100"/>
                                            <div className="carousel-caption d-none d-md-block">
                                                <h1>Welcome to GAME ON!</h1>
                                                <p>All sports related news at one place</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="new" className="container-fluid py-3 overflow-hidden">
                                    <div className="row p-4 border-bottom">
                                        <div className="col-12"><b id="datein"></b></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>          
                </div>
        </section>
    
       </> );
}
export default Home;