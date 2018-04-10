import React, { Component } from 'react';

import classes from './NewPost.css';

import Button from '../../../components/UI/Button/Button';

class NewPost extends Component {
    state = {
        title: '',
        body: '',
        author: 'Kira Yang',
        date: new Date()
    }

    render() {
        return (
            <div className={classes.NewPost}>
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({body: event.target.value})} />
                <Button btnType="Success" clicked={() => this.props.addPost(this.state)}>Add Post</Button>
            </div>
        );
    }
}

export default NewPost;