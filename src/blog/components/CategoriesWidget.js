import React, { Component } from "react"

class CategoriesWidget extends Component{
    render(){
        return(
            <div className="widget widget_categories">
                <h2 className="widget-title">Categories</h2>
                <ul>
                    <li><a href="#!" className="tag-cloud-link">Technology</a></li>
                    <li><a href="#!" className="tag-cloud-link">Business</a></li>
                    <li><a href="#!" className="tag-cloud-link">Androids</a></li>
                    <li><a href="#!" className="tag-cloud-link">iOS</a></li>
                    <li><a href="#!" className="tag-cloud-link">Wach</a></li>
                </ul>
            </div>
        )
    }
}

export default CategoriesWidget;

