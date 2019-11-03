// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import '../public/assets/css/app.css'


import HomeOne from './pages/HomeOne';
import Blog from './blog/Blog';
import SingleBlog from './blog/SingleBlog';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomeOne}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog`} component={Blog}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/single-blog`} component={SingleBlog}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();


