import React from 'react';
import classes from './FullPost.css';
import Button from '../../UI/Button/Button';

const fullPost = (props) => {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;

    let button = null;

    //add authentication for delete button later.
    const auth = false;

    if (auth) {
        button = <Button btnType="Danger" clicked={() => props.deleteClicked(props.loadedPost.id)}>Delete</Button>;
    }

    let link = null;

    if (props.loadedPost) {
        if (props.loadedPost.link)
            link = <a href={props.loadedPost.link.url} target="_blank" className={classes.Link}>{props.loadedPost.link.label}</a>;
        post = (
            <div className={classes.FullPost}>
                <h1 className={classes.Title}>{props.loadedPost.title}</h1>
                <div className={classes.AuthorAndDate}>
                    By <span style={{ color: '#e46a6b' }}>{props.loadedPost.author}</span>
                    &nbsp;on <span style={{ color: '#e46a6b' }}>{new Date(props.loadedPost.date).toDateString()}</span>
                </div>
                <div className={classes.Container}>
                    <div className={classes.Photo}
                        onClick={() => props.imageClicked(props.loadedPost.image)}
                        style={{ backgroundImage: `url(${props.loadedPost.image})` }}></div>
                    <div className={classes.ParagraphDiv}>
                        <p>{props.loadedPost.body}</p>
                        {link}
                    </div>
                </div>
                {button}
            </div>

        );
    }
    return post;
}

export default fullPost;