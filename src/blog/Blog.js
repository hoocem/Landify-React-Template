import React, { Component } from "react"
import Navbar from './components/Navbar'
import Breadcrumb from './components/Breadcrumb'
import SearchWidget from './components/SearchWidget'
import SingleBlogPost from './components/SingleBlogPost'
import Pagination from './components/Pagination'
import SocialMediaWidget from './components/SocialMediaWidget'
import RecentPostsWidget from './components/RecentPostsWidget'
import CategoriesWidget from './components/CategoriesWidget'
import TagsWidget from './components/TagsWidget'
import AdWidget from './components/AdWidget'
import Footer from './components/Footer'

class Blog extends Component{
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
                                    <SingleBlogPost
                                        imgUrl = 'assets/images/all-img/post1.jpg'
                                        alt = ''
                                        date = '08 Dec, 2019'
                                        author = 'Admin'
                                        postUrl = '#!'
                                        tags = {['Design,', 'Agency']}
                                        title = 'Most suited for you to get a personalised quotation'
                                        brief = 'Quality control of your data including read length distribution and uniformity assessment in a few clicks and choose your favorite.'
                                    />    
                                    <SingleBlogPost
                                        imgUrl = 'assets/images/all-img/post2.jpg'
                                        alt = ''
                                        date = '08 Dec, 2019'
                                        author = 'Admin'
                                        postUrl = '#!'
                                        tags = {['Design', 'Aaency']}
                                        title = 'Most suited for you to get a personalised quotation'
                                        brief = 'Quality control of your data including read length distribution and uniformity assessment in a few clicks and choose your favorite.'
                                    />    
                                    <SingleBlogPost
                                        imgUrl = 'assets/images/all-img/post3.jpg'
                                        alt = ''
                                        date = '08 Dec, 2019'
                                        author = 'Admin'
                                        postUrl = '#!'
                                        tags = {['Design', 'Aaency']}
                                        title = 'Most suited for you to get a personalised quotation'
                                        brief = 'Quality control of your data including read length distribution and uniformity assessment in a few clicks and choose your favorite.'
                                    />    
                                    <Pagination/>    
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

export default Blog;

