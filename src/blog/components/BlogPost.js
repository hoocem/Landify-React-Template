import React, { Component } from "react"

class BlogPost extends Component{
    render(){
        return(
            <article className="single-blg-post">
                <a href="#!" className="post-thumbnail">
                    <img src="assets/images/all-img/post1.jpg" alt=""/>
                </a>
                <div className="entry-content">
                    <header className="entry-header">
                        <div className="entry-meta">
                            <span><a href="#!"><i className="far fa-calendar-alt"></i>08 Dec,
                                    2019</a></span><span><a href="#!"><i
                                        className="fas fa-user"></i>Admin</a></span> <span><a href="#!"><i
                                        className="fas fa-tag"></i>Design, Aaency</a></span>
                        </div>
                        <h2 className="entry-title">
                            <a href="#!" rel="bookmark">Most suited for you to get a personalised
                                quotation</a>
                        </h2>
                    </header>
                    <p>
                    Quality control of your data including read length distribution and uniformity assessment in a few clicks and choose
                    your favorite. consectetur adipiscing elit, sed do eiusmod tempor incididunt

                    </p>
                    <div className="row mt-4 mb-4">
                        <div className="col-md-6">
                            <a href="#!">
                                <img src="assets/images/all-img/video_pay.jpg" alt="" draggable="false"/>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <blockquote>
                            Data including read length distribution and uniformity uniformity
                            </blockquote>
                        </div>
                    </div>
                    <p>Quality control of your data including read length c and uniformity assessment in a few clicks and choose
                    your favorite. consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    
                </div>
            </article>
        )
    }
}

export default BlogPost;

