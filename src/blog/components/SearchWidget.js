import React, { Component } from "react"

class SearchWidget extends Component{
    render(){
        return(
            <div className="widget widget_search">
                <h3 className="widget-title">Search Posts</h3>
                <form>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="search"
                            aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                        <div className="input-group-prepend">
                            <button className="btn rt-secondary" type="button" id="button-addon1"><i className="icofont-search"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchWidget;

