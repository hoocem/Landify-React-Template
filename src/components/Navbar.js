import React, { Component } from "react";

class Navbar extends Component {
    render(){
        return(
            <div className="rt-site-header rt-sticky home-one  bsnav">
                <nav className="navbar navbar-expand-lg rt-one-page-menu">
                    <div className="container">
                
                        <a href={`${process.env.PUBLIC_URL}/`} className="brand-logo"><img src="assets/images/logo/logo.png" alt=""/></a>
                        <a href={`${process.env.PUBLIC_URL}/`} className="sticky-logo"><img src="assets/images/logo/logo_white.png" alt=""/></a>
                
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#siteNav"
                            aria-controls="siteNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                
                        <div className="collapse navbar-collapse" id="siteNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active dropdown"><a href="#home" role="button"
                                        className="nav-link smooth-scroll dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">home</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a href={`${process.env.PUBLIC_URL}/`} className="dropdown-item">home 1</a>
                                        <a href={`${process.env.PUBLIC_URL}/home-two`} className="dropdown-item">home 2</a>
                                        <a href={`${process.env.PUBLIC_URL}/home-three`} className="dropdown-item">home 3</a>
                                        <a href={`${process.env.PUBLIC_URL}/blog`} className="dropdown-item">blog</a>
                                        <a href={`${process.env.PUBLIC_URL}/single-blog`} className="dropdown-item">blog single</a>
                                    </div>
                                </li>
                                <li className="nav-item"><a href="#feature" className="nav-link smooth-scroll">Features</a></li>
                                <li className="nav-item"><a href="#overview" className="nav-link smooth-scroll">Overview</a></li>
                                <li className="nav-item"><a href="#price" className="nav-link smooth-scroll">Pricing</a></li>
                                <li className="nav-item"><a href="#fAQ" className="nav-link smooth-scroll">FAQ</a></li>
                            </ul>
                            <div className="rt-menu-tolls">
                                <a href="#download" className="rt-btn rt-light pill text-uppercase smooth-scroll">Download</a>
                            </div>
                        </div>
                
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;


