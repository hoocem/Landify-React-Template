import React, { Component } from "react"

class SingleBlogPost extends Component{
    render(){
        const { imgUrl, alt, date, author, postUrl, tags, title, brief } = this.props

        return(
            <div className="single-blg-post">
                <a href={postUrl} className="post-thumbnail">
                    <img src={imgUrl} alt={alt}/>
                </a>
                <div className="entry-content">
                    <header className="entry-header">
                        <div className="entry-meta">
                            <span><a href={"#!"}><i className="far fa-calendar-alt"></i>{date}</a></span><span><a href="#!"><i class="fas fa-user"></i>{author}</a></span> <span><a href="#!"><i class="fas fa-tag"></i>
                                {tags.map(val => `${val} `)}
                            </a></span>
                        </div>
                        <h2 className="entry-title">
                            <a href={postUrl} rel="bookmark">{title}</a>
                        </h2>
                    </header>
                    <p>
                        {brief}    
                    </p>
                    <footer className="entry-footer">
                        <a href={postUrl} className="rt-btn rt-secondary pill text-uppercase rt-sm">read more</a>
                    </footer>
                </div>
            </div>
        )
    }
}

export default SingleBlogPost;

