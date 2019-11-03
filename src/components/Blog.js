import React, { Component } from "react";
import Faq from './Faq'
import Contact from './Contact'

class Blog extends Component{
    render(){

        let data = [
            {imgUrl: 'assets/images/all-img/blog_imge_1.png',
            date: '08 Dec, 2019',
            author: 'Admin',
            title: 'most suited for you to get a personalised',
            link: '#'},

            {imgUrl: 'assets/images/all-img/blog_imge_2.png',
            date: '08 Dec, 2019',
            author: 'Admin',
            title: 'Discover how OncoKDM provides daily support',
            link: '#'},

            {imgUrl: 'assets/images/all-img/blog_imge_3.png',
            date: '08 Dec, 2019',
            author: 'Admin',
            title: 'Smart variant classification including...',
            link: '#'},
        ]

        let dataList = data.map(val => {
            return(
                <div className="col-lg-4 mx-auto col-md-6" key={val.title}>
                    <div className="blog-style-1">
                        <a className="blog-thumb" href={val.link}>
                            <img src={val.imgUrl} alt="" draggable="false"/>
                        </a>
                        <div className="inner-content">
                            <div className="blog-meta">
                                <span><i className="far fa-calendar-alt"></i>{val.date}</span>
                                <span><i className="fas fa-user"></i>{val.author}</span>
                            </div>
                            <div className="blog-footer">
                                <h3><a href={val.link}>{val.title}</a></h3>
                            </div>
                        </div>
                    </div>
                </div>        
            )
        })

        return(
            <div>
                <div className="spacer-200"></div>
                <div className="blog-area" data-scrollax-parent="true">
                    <div className="rt-design-elmnts one" data-scrollax="properties: { translateY: '140px' ,translateX: '-100px' }"></div>
                    <div className="rt-design-elmnts two" data-scrollax="properties: { translateX: '-100px', translateY: '-100px' }"></div>
                    <div className="rt-design-elmnts three" data-scrollax="properties: {  translateX: '-120px' }"></div>
                    <div className="rt-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mx-auto text-center">
                                <div className="rt-section-title-wrapper">
                                    <h2 className="rt-section-title">Latest Blog</h2>
                                    <p>Quality control of your data including read length distribution.</p>
                                </div>
                            </div>
                        </div>
                        <div className="spacer-60"></div>
                        <div className="row">
                            {dataList}   
                        </div>
                        <div className="spacer-100"></div>
                        <div className="row align-items-center" id="fAQ">
                            <Faq/>
                            <Contact/>
                        </div>
                    </div>      
                </div>
            </div>
        )
    }
}


export default Blog;
