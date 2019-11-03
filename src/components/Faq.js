import React, {Component} from 'react'

class Faq extends Component {
    render(){
        return(
            <div className="col-lg-7">
                <div id="accordion">
                    <div className="card wow fadeInUp">
                        <div className="card-header card-primary" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                                    aria-controls="collapseOne">
                                    What is Saasax ?
                                </button>
                            </h5>
                        </div>
                
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                Landing Page Builder is a hosted platform powered by the Brizy builder aiming to connect you with p otential clients,
                                collect leads, and close sales through a more streamlined experience.
                            </div>
                        </div>
                    </div>
                    <div className="card wow fadeInUp" data-wow-duration="1.0s">
                        <div className="card-header card-primary" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                                    aria-expanded="false" aria-controls="collapseTwo">
                                    Can I use this as landing Page?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                                Landing Page Builder is a hosted platform powered by the Brizy builder aiming to connect you with p otential clients,
                                collect leads, and close sales through a more streamlined experience.
                            </div>
                        </div>
                    </div>
                    <div className="card wow fadeInUp" data-wow-duration="1.5s">
                        <div className="card-header card-primary" id="headingThree">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree"
                                    aria-expanded="false" aria-controls="collapseThree">
                                Can I upgrade from Free to PRO?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body">
                                Landing Page Builder is a hosted platform powered by the Brizy builder aiming to connect you with p otential clients,
                                collect leads, and close sales through a more streamlined experience.
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Faq