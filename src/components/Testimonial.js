import React, {Component} from "react"

class Testimonial extends Component {
    
    render(){

        let data = [
            {imgUrl: 'assets/images/all-img/t1.png',
            name: 'David Miller',
            designation: 'Journalist',
            text: `"I'm an early user of saasax. Really Impressive and Fast! Easily the best tool for use anyone "`},

            {imgUrl: 'assets/images/all-img/t1.png',
            name: 'David Miller',
            designation: 'Journalist',
            text: `"I'm an early user of saasax. Really Impressive and Fast! Easily the best tool for use anyone "`},

            {imgUrl: 'assets/images/all-img/t1.png',
            name: 'David Miller',
            designation: 'Journalist',
            text: `"I'm an early user of saasax. Really Impressive and Fast! Easily the best tool for use anyone "`},

            {imgUrl: 'assets/images/all-img/t1.png',
            name: 'David Miller',
            designation: 'Journalist',
            text: `"I'm an early user of saasax. Really Impressive and Fast! Easily the best tool for use anyone "`},
        ]

        let dataList = data.map((val, i) => {
            return(
                <div className="single-testimonials text-center" key={i}>
                    <div className="author-thumb">
                        <img src={val.imgUrl} alt="author img" draggable="false" className="rounded-circle"/>
                    </div>
                    <div className="testi-content">
                        <p>{val.text}</p>
                    </div>
                    <div className="testi-bio">
                        <h5>{val.name}</h5>
                        <h6>{val.designation}</h6>
                    </div>
                </div>                
            )
        })

        return(
            <div>
                <div className="spacer-150"></div>
                <div className="testimonials-area" style={{backgroundImage: 'url(assets/images/all-img/testimonial_bg.png)'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="rt-section-title-wrapper">
                                    <h2 className="rt-section-title">What Users Says</h2>
                                    <p>Quality control of your data including read length distribution.</p>
                                </div>
                            </div>
                            <div className="col-lg-10 mx-auto">
                                <div className="testimonials-active owl-carousel">
                                    {dataList}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
 export default Testimonial;

