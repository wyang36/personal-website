import React, { Component } from 'react';
//import classes from './Blog.css';

import axios from '../../axios';

import Posts from '../../components/Blog/Posts/Posts';
import FullPost from '../../components/Blog/FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import Modal from '../../components/UI/Modal/Modal';
import classes from './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPost: null,
        error: false,
        addedPost: null,
        imageClicked: false,
        currentImage: null,
        leftIndex: 0,
        rightIndex: 4
    }

    postSelectedHandler = (id) => {
        const selectedPost = this.state.posts.find(element => {
            return element.id === id;
        })
        this.setState({ selectedPost: selectedPost });
    }

    componentDidMount() {
        axios.get('/BlogPosts.json?orderBy="date"')
            .then(response => {
                const fetchedPosts = [];
                for (let key in response.data) {
                    fetchedPosts.push({
                        ...response.data[key],
                        id: key
                    })
                }

                this.setState({ posts: fetchedPosts.reverse() });
            })
            .catch(error => {
                this.setState({ error: true });
            })
    }

    deletePostHandler = (id) => {
        axios.delete('/BlogPosts/' + id + '.json')
            .then(response => {
                let updatedposts = [...this.state.posts];
                updatedposts = updatedposts.filter(post => post.id !== id);
                this.setState({ posts: updatedposts, selectedPost: null });
            })
    }

    addPostHandler = (post) => {
        axios.post('/BlogPosts.json', post)
            .then(response => {
                let updatedposts = [...this.state.posts];
                updatedposts.unshift({
                    ...post,
                    id: response.data.name
                });
                this.setState({ posts: updatedposts });
            });
    }

    clickImageHandler = (imagePath) => {
        this.setState({ imageClicked: true, currentImage: `url(${imagePath})` });
    }

    removeImageHandler = () => {
        this.setState({ imageClicked: false });
    }

    clickLeftHandler = () => {
        this.setState({
            leftIndex: this.state.leftIndex - 1,
            rightIndex: this.state.rightIndex - 1
        });
    }

    clickRightHandler = () => {
        this.setState({
            leftIndex: this.state.leftIndex + 1,
            rightIndex: this.state.rightIndex + 1
        });
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong</p>;

        if (!this.state.error) {
            posts = <Posts
                showLeft={this.state.leftIndex > 0}
                showRight={this.state.rightIndex < (this.state.posts.length - 1)}
                leftClicked={this.clickLeftHandler}
                rightClicked={this.clickRightHandler}
                posts={this.state.posts.slice(this.state.leftIndex, this.state.rightIndex)}
                postClicked={this.postSelectedHandler} />;
        }

        //add authentication to new post later.
        let newpost = null;
        const auth = false;
        if (auth) {
            newpost = <NewPost addPost={this.addPostHandler} />
        }

        const imageDetail = <div
            style={{ backgroundImage: this.state.currentImage }}
            className={classes.Photo}
        />;
        return (
            <div>
                {posts}
                <FullPost loadedPost={this.state.selectedPost}
                    deleteClicked={this.deletePostHandler}
                    imageClicked={this.clickImageHandler} />
                {newpost}
                <Modal show={this.state.imageClicked} modalClosed={this.removeImageHandler}>
                    {imageDetail}
                </Modal>
            </div>
        );
    }
}

export default Blog;