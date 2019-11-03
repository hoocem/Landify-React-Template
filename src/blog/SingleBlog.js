import React, { Component } from "react"
import Navbar from './components/Navbar'
import Breadcrumb from './components/Breadcrumb'
import BlogPost from './components/BlogPost'
import Comments from './components/Comments'
import SearchWidget from './components/SearchWidget'
import SocialMediaWidget from './components/SocialMediaWidget'
import RecentPostsWidget from './components/RecentPostsWidget'
import CategoriesWidget from './components/CategoriesWidget'
import TagsWidget from './components/TagsWidget'
import AdWidget from './components/AdWidget'
import Footer from './components/Footer'

class SingleBlog extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Breadcrumb/>
                <div className="blog-content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="all-blog-post">
                                    <BlogPost/>
                                    <Comments/>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="sidebar-group">
                                    <SearchWidget/>
                                    <SocialMediaWidget/>
                                    <RecentPostsWidget recentPosts = {[
                                        {postUrl: '#!', imgUrl: 'assets/images/all-img/recent_post_1.jpg', alt: '', 
                                        title: 'Make your everyday life easy from now', date: '2 days ago'},
                                        {postUrl: '#!', imgUrl: 'assets/images/all-img/recent_post_2.jpg', alt: '', 
                                        title: 'Top 10 life hackers tools for your work', date: '2 days ago'},
                                        {postUrl: '#!', imgUrl: 'assets/images/all-img/recent_post_3.jpg', alt: '', 
                                        title: 'Dont be upset when you are in work', date: '2 days ago'}
                                    ]}/>
                                    <CategoriesWidget/>
                                    <TagsWidget/>
                                    <AdWidget/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <Footer/> 
            </div>
        )
    }
}

export default SingleBlog;

