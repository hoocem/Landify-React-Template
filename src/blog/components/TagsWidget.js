import React, { Component } from "react"

class TagsWidget extends Component{
    render(){
        return(
            <div className="widget widget_tag_cloud">
                <h2 className="widget-title">tags</h2>
                <div className="tagcloud">
                    <a href="#!" className="tag-cloud-link">Technology</a>
                    <a href="#!" className="tag-cloud-link">Business</a>
                    <a href="#!" className="tag-cloud-link">App</a>
                    <a href="#!" className="tag-cloud-link">Marketing</a>
                    <a href="#!" className="tag-cloud-link">Social</a>
                    <a href="#!" className="tag-cloud-link">Politics</a>
                </div>
            </div>
        )
    }
}

export default TagsWidget;

