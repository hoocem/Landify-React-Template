import React, { Component } from "react"
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Service from '../components/Service'
import Feature from '../components/Feature'
import PromoData from '../components/PromoData'
import Dashboard from '../components/Dasboard'
import Testimonial from '../components/Testimonial'
import Divider from '../components/Divider'
import Pricing from '../components/Pricing'
import Blog from '../components/Blog'
import Download from '../components/Download'
import Footer from '../components/Footer'

class HomeOne extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Banner/>
                <Service/>
                <Feature/>
                <PromoData/>
                <Dashboard/>
                <Testimonial/>
                <Divider/>
                <Pricing/>
                <Blog/>
                <Download/>
                <Footer/>
            </div>
        )
    }
}




export default HomeOne;

