import React,  { Component } from "react";

class Pricing extends Component{
    render(){

        let data = [
            {title: 'Free', 
            amount: 0, 
            features: ['Unlimited Pages', 'All Team Members', 'Unlimited Leads', 'Unlimited Page Views', 'Export in HTML/CSS']},

            {title: 'Startar', 
            amount: 30, 
            features: ['Unlimited Pages', 'All Team Members', 'Unlimited Leads', 'Unlimited Page Views', 'Export in HTML/CSS']},

            {title: 'Premium', 
            amount: 60, 
            features: ['Unlimited Pages', 'All Team Members', 'Unlimited Leads', 'Unlimited Page Views', 'Export in HTML/CSS']},
        ]

        let dataList = data.map((val, i) => {
            return(
                <div className="col-lg-4 mx-auto text-center col-md-6" key={i}>
                            <div className="single-price-table" key={val.title}>
                                <div className="price-design-elemnts one"></div>
                                <div className="price-design-elemnts two"></div>
                                <div className="price-design-elemnts three"></div>
                                <div className="price-design-elemnts four"></div>
                                <div className="price-header">
                                    <span className="package-title">{val.title}</span>
                                    <span className="package-amount">{`$${val.amount}`}<span>/</span><span>mo</span></span>
                                </div>
                                <div className="price-body">
                                    <ul>
                                        {val.features.map(val => {
                                            return(<li key={val}>{val}</li>)
                                        })}
                                    </ul>
                                </div>
                                <div className="price-footer smooth-scroll">
                                    <a href="#download">Get Started</a>
                                </div>
                            </div>
                        </div>        
            )
        })

        return(
            <div>
                <div className="spacer-120"></div>
                <section className="price-area" id="price">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="rt-section-title-wrapper">
                                <h2 className="rt-section-title">Affordable Pricing for All</h2>
                                <p>Quality control of your data including read length distribution.</p>
                            </div>
                        </div>
                    </div>
                    <div className="spacer-80"></div>
                    <div className="row">
                        {dataList}
                    </div>
                </div>
                </section>
            </div>
        )
    }
}

export default Pricing;

