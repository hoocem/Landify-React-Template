import React, { Component } from "react"

class Pagination extends Component{
    render(){
        return(
            <div aria-label="Page navigation example">
                <ul className="pagination  rt-paganation">
                    <li className="page-item"><a className="page-link" href="#!"><i className="icofont-simple-left"></i></a></li>
                    <li className="page-item active"><a className="page-link" href="#!">1</a></li>
                    <li className="page-item"><a className="page-link" href="#!">2</a></li>
                    <li className="page-item"><a className="page-link" href="#!">3</a></li>
                    <li className="page-item"><a className="page-link" href="#!"><i className="icofont-simple-right"></i></a></li>
                </ul>
            </div>
        )
    }
}

export default Pagination;

