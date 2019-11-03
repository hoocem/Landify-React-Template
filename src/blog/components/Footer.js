import React, { Component } from "react"

class Footer extends Component{
    render(){
        return(
            <div className="rt-site-footer main-footer">
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 mx-auto">
                                <div className="rt-single-widget">
                                    <a href="index-2.html">
                                        <img src="assets/images/logo/logo.png" alt="" draggable="false" class="rt-footer-logo"/>
                                    </a>
                                    <p>Landing Page Builder is a hosted platform powered by the Brizy builder aiming to connect
                                        you with
                                        potential clients.</p>
                                    <div className="copy-text">
                                        <p>2019 Copyright <a href="#!">Saasax</a> . All Rights Reserved</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4">
                                <div className="rt-single-widget">
                                    <h4 className="rt-footer-title">Company</h4>
                                    <ul>
                                        <li><a href="#!">About us</a></li>
                                        <li><a href="#!">Our Team</a></li>
                                        <li><a href="#!">Products</a></li>
                                        <li><a href="#!">Contact</a></li>
                                        <li><a href="#!">About us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4">
                                <div className="rt-single-widget">
                                    <h4 className="rt-footer-title">Product</h4>
                                    <ul>
                                        <li><a href="#!">Feature</a></li>
                                        <li><a href="#!">Pricing</a></li>
                                        <li><a href="#!">Credit</a></li>
                                        <li><a href="#!">FAQ</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4">
                                <div className="rt-single-widget">
                                    <h4 className="rt-footer-title">Download</h4>
                                    <ul>
                                        <li><a href="#!">iOS</a></li>
                                        <li><a href="#!">Android</a></li>
                                        <li><a href="#!">Microsoft</a></li>
                                        <li><a href="#!">Desktop</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4">
                                <div className="rt-single-widget">
                                    <h4 className="rt-footer-title">Support</h4>
                                    <ul>
                                        <li><a href="#!">Privacy</a></li>
                                        <li><a href="#!">Help</a></li>
                                        <li><a href="#!">Terms</a></li>
                                        <li><a href="#!">FAQ</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;

