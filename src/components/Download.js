import React , { Component } from "react";


class Download extends Component{
    render(){
        return(
            <div>
                <div className="spacer-150 h-m"></div>
                <div className="spacer-20 h-m"></div>
                <div  id="download" className="dwlond-area">
                    <div className="shape-voverlay">
                        <img src="assets/images/all-img/bg-elements_1.png" alt="" className="mx-auto d-block" draggable="false"/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mx-auto text-center">
                                <div className="rt-section-title-wrapper">
                                    <h2 className="rt-section-title">Downlowd now & enjoy <br/> new Features</h2>
                                <a href="#!" className="rt-btn rt-primary pill  text-uppercase">Download now</a>
                                <img src="assets/images/all-img/tab--content_1.png" alt="dwlnd-mockup" draggable="false" className="dnld-mockup-img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Download;







