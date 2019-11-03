import React, { Component } from "react";
import Brands from '../components/Brands'

class Banner extends Component {
    render(){
        return(
            <div className="rt-banner-area">
                <div className="single-rt-banner rt-banner-height bg-hide-on-mobile" style={{backgroundImage: 'url(assets/images/all-img/bg.png)'}}>
                    <div className="banner-shapoe-bg-1"></div>
                    <div className="banner-shapoe-bg-2"></div>
                    <div className="container">
                        <div className="row  rt-banner-height">
                            <div className="col-lg-6">
                                <div className="rt-banner-content">
                                    <h1>
                                        Simplest way <br/> to  build tools
                                    </h1>
                                    <p>
                                        Quality control of your data including read length distribution and uniformity assessment
                                    </p>
                                    <a href="#download" className="rt-btn rt-primary pill text-uppercase smooth-scroll">Get Started Now
                                        <span></span>
                                    </a>
                                </div>
                            </div>
                            <div className="banner-mockup-img" data-scrollax-parent="true">
                                <img src="assets/images/all-img/banner_mockup.png" alt="banner-mockup" draggable="false" className="mockup-img-1"/>
                                <a href="https://vimeo.com/310740632" className="rt-btn rt-video-primary play-video">
                                    <span></span>
                                </a>
                            </div>
                            <div className="col-lg-10 mx-auto text-center">
                                <Brands/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner;


