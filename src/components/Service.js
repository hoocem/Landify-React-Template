import React, { Component } from "react";

class Service extends Component{
    render(){
        let data = [
            {
                icon: 'fas fa-layer-group',
                title: 'Flexible Tools',
                desc: 'Quality control of your data including read length distribution and few clicks.',
                color: 'services-block-1'
            },

            {
                icon: 'icofont-code',
                title: 'Retina Ready',
                desc: 'Quality control of your data including read length distribution and few clicks.',
                color: 'services-block-1 color_2'
            },

            {
                icon: 'far fa-clone',
                title: 'Responsive',
                desc: 'Quality control of your data including read length distribution and few clicks.',
                color: 'services-block-1 color_3'
            }
        ];
        let dataList = data.map((val, i) => {
            return(
                <div className="col-lg-4 col-md-6 mx-auto" key={i}>
                    <div className={`${val.color}`}>
                        <div className="icon-thumb">
                            <i className={`${val.icon}`}></i>
                        </div>
                        <h3>
                            {val.title}
                        </h3>
                        <p>
                            {val.desc}
                        </p>
                    </div>
                </div>
            )
        });
        return (
            <div className="services-area pb-5">
                <div className="container">
                    <div className="row">
                        {dataList}
                    </div>
                    <div className="spacer-30"></div>
                    <div className="row">
                        <div className="col-12">
                            <div className="callto-action_1">
                                <h4><span className="rt-primary-text">Version 2.7.3</span> Available in All Store</h4>
                                <a href="#!" className="text-uppercase rt-btn rt-primary pill">Download Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Service;

