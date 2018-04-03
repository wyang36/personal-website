import React, { Component } from 'react';
//import classes from './Blog.css';

import Posts from './Posts/Posts';

class Blog extends Component {

    render() {
        return (
            <div>
                <Posts />
            </div>
        );
    }
}

export default Blog;