import React ,  { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Brands extends Component {
    render(){
        const options = {
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplaySpeed: 1000
        }
        return(
            <div className="banner-brands">
                <h3>More then 30,000 companies trust us</h3>
                <OwlCarousel className="banner-brands-active owl-carousel" {...options}>
                    <div className="single-brands item">
                        <img src="assets/images/all-img/brands_1.png" alt="brands-1" draggable="false"/>
                    </div>
                    <div className="single-brands item">
                        <img src="assets/images/all-img/brands_2.png" alt="brands-2" draggable="false"/>
                    </div>
                    <div className="single-brands item">
                        <img src="assets/images/all-img/brands_3.png" alt="brands-3" draggable="false"/>
                    </div>
                    <div className="single-brands item">
                        <img src="assets/images/all-img/brands_4.png" alt="brands-4" draggable="false"/>
                    </div>
                    <div className="single-brands item">
                        <img src="assets/images/all-img/brands_3.png" alt="brands-1" draggable="false"/>
                    </div>
                    <div className="single-brands item">
                        <img src="assets/images/all-img/brands_2.png" alt="brands-2" draggable="false"/>
                    </div>
                </OwlCarousel>
            </div>
        )
    }
}

export default Brands;


