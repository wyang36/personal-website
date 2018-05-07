import React from 'react';
import Post from './Post/Post';
import classes from './Posts.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import * as solidIcons from '@fortawesome/fontawesome-free-solid';

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

    let leftArrow = null;
    if (props.showLeft)
        leftArrow = (<span className={classes.Arrow} onClick={props.leftClicked}>
            <FontAwesomeIcon icon={solidIcons.faAngleLeft} />
        </span>);

    let rightArrow = null;
    if (props.showRight)
        rightArrow = (<span className={classes.Arrow} onClick={props.rightClicked}>
            <FontAwesomeIcon icon={solidIcons.faAngleRight} />
        </span>);

    return (
        <section className={classes.Posts}>
            {leftArrow}
            {posts}
            {rightArrow}
        </section>
    );

}

export default posts;
