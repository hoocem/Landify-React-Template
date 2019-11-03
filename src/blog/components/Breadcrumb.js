import React, { Component } from "react"

class Breadcrumb extends Component{
    render(){
        return(
            <div className="breadcump-area page-banner-height"
                style={{backgroundImage: 'url(assets/images/all-img/breadcump.jpg)'}}>
                <div className="container">
                    <div className="row page-banner-height">
                        <div className="col-12 text-center">
                            <div className="bread-cumb-content">
                                <h3>Latest Blog</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item"><a href="#!">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Latest Blog</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Breadcrumb;

