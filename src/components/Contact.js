import React, {Component} from 'react'

class Contact extends Component {
    render(){
        return(
            <div className="col-lg-5">
                <div className="design-box">
                    <div className="box-design-elemnts one"></div>
                    <div className="box-design-elemnts two"></div>
                    <div className="box-design-elemnts three"></div>
                    <div className="box-design-elemnts four"></div>
                    <h4>Contact Us</h4>
                    <form action="#!">
                        <input type="text" className="from-control" placeholder="Your Name"/>
                        <input type="email" className="from-control" placeholder="Your Mail"/>
                        <input type="tel" className="from-control" placeholder="Your Phone"/>
                        <input type="text" className="from-control" placeholder="Your Address"/>
                        <textarea className="from-control" placeholder="Your Messege"></textarea>
                        <input type="submit" value="Send messege" className="rt-btn rt-primary pill"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact