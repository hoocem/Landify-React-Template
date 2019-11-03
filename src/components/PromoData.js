import React ,  { Component } from "react";

class PromoData extends Component {
    render(){
        return(
            <div className="promo-data-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <div className="promodata-img">
                                <img src="assets/images/all-img/data_1.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="promo-data-text">
                                <h2 className="rt-section-title">Add Your Data</h2>
                                <p>
                                Quality control of your data including read length distribution and uniformity assessment in a few clicks and choose
                                your favorite technology.</p>
                                <a href="#!" className="rt-btn rt-primary pill text-uppercase">Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-5 mt-3 mt-md-0">
                            <div className="promo-data-text">
                                <h2 className="rt-section-title">Organize All Data</h2>
                                <p>
                                Quality control of your data including read length distribution and uniformity assessment in a few clicks and choose
                                your favorite technology.</p>
                                <a href="#!" className="rt-btn rt-primary pill text-uppercase">Get Started</a>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="promodata-img">
                                <img src="assets/images/all-img/data_3.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PromoData;


