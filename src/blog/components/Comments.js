import React, { Component } from "react"

class Comments extends Component{
    render(){
        return(
            <div id="comments" className="comments-area">      
                <h2 className="comments-title">Comments (5)</h2>
                <ul className="cmnts-parent">
                    <li className="single-comments">
                        <div className="cmnts-thumb">
                            <img src="assets/images/all-img/cmnt1.png" alt="" className="rounded-circle"/>
                        </div>
                        <div className="cmnts-text">
                            <h5>Adam Haul</h5>
                            <p>Quality control of your data including read length distribution and uniformity assessment in a few clicks and choose
                            your favorite. name this.</p>
                            <a href="#!" className="cmnt-link-share"><i className="fa fa-share "></i>reply</a>
                        </div>
                    </li>
                    <li className="single-comments">
                
                        <div className="cmnts-thumb">
                            <img src="assets/images/all-img/cmnt2.png" alt="" className="rounded-circle"/>
                        </div>
                        <div className="cmnts-text">
                            <h5>David Murphy</h5>
                            <p>vai re amke r trool baniash na tora ;) </p>
                            <a href="#!" className="cmnt-link-share"><i className="fa fa-share "></i>reply</a>
                        </div>
                        <ul className="cmnt-childreeen">
                            <li className="single-comments">
                                <div className="cmnts-thumb">
                                    <img src="assets/images/all-img/cmnt3.png" alt="" className="rounded-circle"/>
                                </div>
                                <div className="cmnts-text">
                                    <h5>David Murphy</h5>
                                    <p>Quality control of your data including read length distribution and uniformity assessment in a few clicks and choose
                                    this</p>
                                    <a href="#!" className="cmnt-link-share"><i className="fa fa-share "></i>reply</a>
                                </div>
                        
                            </li>
                        </ul>
                    </li>
                
                </ul>
            
                <div className="leave-a-replay-box">
                    <h3 className="commetns-title">Post Comment</h3>
                    <p>Your email address will not be published. Required fields are marked *</p>
                    <form>
                        <input type="text" className="form-control" placeholder=" Name"/>
                        <input type="email" className="form-control" placeholder="mail"/>
                        <textarea className="form-control" placeholder="write your message"></textarea>
                        <button type="submit" className="rt-btn rt-secondary pill text-uppercase">Post Comment</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default Comments;

