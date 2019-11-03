import React, { Component } from "react"

class RecentPostsWidget extends Component{
    render(){
        const { recentPosts } = this.props

        let dataList = recentPosts.map((val, i) => {
            return(
                <li key={i}>
                    <a href={val.postUrl}><img src={val.imgUrl}
                            alt={val.alt}
                            className="widget-posts-img"/></a>
                    <div className="widget-posts-descr">
                        <a href={val.postUrl} className="title">{val.title}</a>
                        <div className="date">{val.date}</div>
                    </div>
                </li>
            )                    
        })

        return(
            <div className="widget">
                <h2 className="widget-title">Recent Posts</h2>
                <div className="rt-widget-recent-posts">
                    <ul className="posts">
                        {dataList}
                    </ul>

                </div>
            </div>
        )
    }
}

export default RecentPostsWidget;

