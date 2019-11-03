import React, { Component } from "react"

class SocialMediaWidget extends Component{
    render(){
        return(
            <div className="widget widget_social_media">
                <h2 className="widget-title">Follow Us</h2>
                <ul>
                    <li><a href="#!" className="facebook"><i className="fab fa-facebook-square"></i></a></li>
                    <li><a href="#!" className="twitter"><i className="fab fa-twitter-square"></i></a></li>
                    <li><a href="#!" className="g-pluse"><i className="fab fa-google-plus-square"></i></a></li>
                    <li><a href="#!" className="instra"><i className="fab fa-instagram"></i></a></li>
                </ul>

            </div>
        )
    }
}

export default SocialMediaWidget;

