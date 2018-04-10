﻿import React, { Component } from 'react';
//import classes from './Blog.css';

import axios from '../../axios';

import Posts from '../../components/Blog/Posts/Posts';
import FullPost from '../../components/Blog/FullPost/FullPost';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    state = {
        posts: [],
        selectedPost: null,
        error: false,
        addedPost: null
    }

    postSelectedHandler = (id) => {
        const selectedPost = this.state.posts.find(element => {
            return element.id === id;
        })
        this.setState({ selectedPost: selectedPost });
    }

    componentDidMount() {
        axios.get('/BlogPosts.json')
            .then(response => {
                const fetchedPosts = [];
                for (let key in response.data) {                    
                    fetchedPosts.push({
                        ...response.data[key],
                        id: key
                    })
                }

                this.setState({ posts: fetchedPosts });
            })
            .catch(error => {
                this.setState({ error: true });
            })
    }

    deletePostHandler = (id) => {
        axios.delete('/BlogPosts/' + id + '.json')
            .then(response => {
                let updatedposts = [ ...this.state.posts ];
                updatedposts = updatedposts.filter(post => post.id !== id);
                this.setState({ posts: updatedposts, selectedPost: null });
            })
    }

    addPostHandler = (post) => {
        axios.post('/BlogPosts.json', post)
            .then(response => {
                let updatedposts = [ ...this.state.posts ];
                updatedposts.push({
                    ...post,
                    id: response.data.name
                });
                this.setState({ posts: updatedposts });
            });
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong</p>;

        if (!this.state.error) {
            posts = <Posts
                posts={this.state.posts}
                postClicked={this.postSelectedHandler} />;
        }

        //add authentication to new post later.
        let newpost = null;
        const auth = false;
        if (auth) {
            newpost = <NewPost addPost={this.addPostHandler} />
        }
        return (
            <div>
                {posts}
                <FullPost loadedPost={this.state.selectedPost}
                    deleteClicked={this.deletePostHandler} />
                    {newpost}
            </div>
        );
    }
}

export default Blog;