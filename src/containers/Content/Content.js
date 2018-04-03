import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Intro from '../../components/Intro/Intro';
import Blog from '../Blog/Blog';

class Content extends Component {
    render() {

        return (
            <Aux>
                <Route path="/" exact component={Intro} />
                <Route path="/blog" component={Blog} />
                {/* <Route path="/about-me" component={AboutMe} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} /> */}
            </Aux>
        );
    }
}

export default Content;