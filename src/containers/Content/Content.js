import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Intro from '../../components/Intro/Intro';
import Blog from '../Blog/Blog';
import About from '../../components/About/About';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';

class Content extends Component {
    render() {

        return (
            <Aux>
                <Route path="/" exact component={Intro} />
                <Route path="/about-me" component={About} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
                <Route path="/projects" component={Portfolio} />
            </Aux>
        );
    }
}

export default Content;