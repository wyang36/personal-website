import React from 'react';
import Post from './Post/Post';
import classes from './Posts.css';

const posts = (props) => {
    const posts = props.posts.map(
        post => {
            return <Post
                key={post.id}
                title={post.title}
                author={post.author}
                body={post.body}
                date={post.date}
                clicked={() => props.postClicked(post.id)}
            />
        }
    );

    return (
        <section className={classes.Posts}>
            {posts}
        </section>
    );

}

export default posts;
