import React, { Component } from "react";
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

class Dashboard extends Component {
    state = {
        didViewCountUp: false
    }

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({didViewCountUp: true})
        }
    }

    render(){

        let countData = [
            {countTitle: 'App Download', countNum: 80},
            {countTitle: 'Happy users', countNum: 19},
            {countTitle: 'Great Reviews', countNum: 39}
        ]

        let countDataList = countData.map((val, i) => {
            return(
                <div className="col-md-4 mx-auto text-center" key={i}>
                    <div className="single-counter">
                        <h5>
                            <span>
                            <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                                <CountUp end={this.state.didViewCountUp ? val.countNum : 0} />
                            </VisibilitySensor>
                            </span>k+
                        </h5>
                        <h6>{val.countTitle}</h6>
                    </div>
                </div>
            )
        })

        let carouselData = [
            {imgUrl: 'assets/images/all-img/tab--content_1.png', alt: 'dashbord_mockup_1'},
            {imgUrl: 'assets/images/all-img/tab--content_1.png', alt: 'dashbord_mockup_1'},
            {imgUrl: 'assets/images/all-img/tab--content_1.png', alt: 'dashbord_mockup_1'},
            {imgUrl: 'assets/images/all-img/tab--content_1.png', alt: 'dashbord_mockup_1'},
            {imgUrl: 'assets/images/all-img/tab--content_1.png', alt: 'dashbord_mockup_1'},
            {imgUrl: 'assets/images/all-img/tab--content_1.png', alt: 'dashbord_mockup_1'},
            {imgUrl: 'assets/images/all-img/tab--content_1.png', alt: 'dashbord_mockup_1'},
            {imgUrl: 'assets/images/all-img/tab--content_1.png', alt: 'dashbord_mockup_1'},
        ]

        let carouselDataList = carouselData.map((val, i) => {
            return(
                <div className="single-dshbrd-caro" key={i}>
                    <img src={val.imgUrl} alt={val.alt} draggable="false"/>
                </div>
            )
        })

        let servicesData = [
            {imgUrl: 'assets/images/all-img/services_icon_1.png', 
            title: 'Add Medias', 
            description: 'Quality control of your data in including read length few clicks uniformity assessment.'},

            {imgUrl: 'assets/images/all-img/services_icon_2.png', 
            title: 'Free Storage', 
            description: 'Quality control of your data in including read length few clicks uniformity assessment.'},

            {imgUrl: 'assets/images/all-img/services_icon_3.png', 
            title: 'Integrate Tools', 
            description: 'Quality control of your data in including read length few clicks uniformity assessment.'},

            {imgUrl: 'assets/images/all-img/services_icon_4.png', 
            title: 'Cloud Service', 
            description: 'Quality control of your data in including read length few clicks uniformity assessment.'},

            {imgUrl: 'assets/images/all-img/services_icon_5.png', 
            title: 'Secure Data', 
            description: 'Quality control of your data in including read length few clicks uniformity assessment.'},

            {imgUrl: 'assets/images/all-img/services_icon_6.png', 
            title: 'Team Chat', 
            description: 'Quality control of your data in including read length few clicks uniformity assessment.'},
        ]

        let servicesDataList = servicesData.map((val, i) => {
            return(
                <div className="col-md-4 mx-auto text-center" key={i}>
                    <div className="services-block2">
                        <img src={val.imgUrl} alt="services_icon" draggable="false"/>
                        <h4>{val.title}</h4>
                        <p>{val.description}</p>
                    </div>
                </div>        
            )
        })

        return(
            <div className="dashbporad-area" data-scrollax-parent="true" id="overview">
                <div className="rt-design-elmnts one" data-scrollax="properties: { translateY: '140px' ,translateX: '-100px' }"></div>
                <div className="rt-design-elmnts two" data-scrollax="properties: { translateX: '-100px', translateY: '-100px' }"></div>
                <div className="rt-design-elmnts three" data-scrollax="properties: { translateY: '-700px', translateX: '-120px' }"></div>
                <div className="rt-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 counter-box">
                            <div className="row">
                                {countDataList}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mx-auto text-center">
                            <div className="rt-section-title-wrapper">
                                <h2 className="rt-section-title">
                                    More Reason to Choose This
                                </h2>
                                <p>
                                    Quality control of your data including read length distribution.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashbord-carosel-active owl-carousel">
                    {carouselDataList}
                </div>
                <div className="spacer-70"></div>
                <div className="container">
                    <div className="row">
                        {servicesDataList}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;


