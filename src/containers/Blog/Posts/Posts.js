import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import classes from './Posts.css';

import axios from '../../../axios';


class Posts extends Component {
    state = {
        posts: []
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    }

    componentDidMount() {
        axios.get('/BlogPosts.json')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map((post, index) => {
                    return { ...post, id: index }
                })
                this.setState({ posts: updatedPosts });
                //console.log(response);
            })
            .catch(error => {
                this.setState({ error: true });
            })
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong</p>;

        if (!this.state.error) {
            posts = this.state.posts.map(
                post => {
                    return <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        body={post.body}
                        clicked={() => this.postSelectedHandler(post.id)}
                    />
                }
            );
        }

        return (
            <section className={classes.Posts}>
                {posts}
            </section>
        );
    }
}

export default Posts;
