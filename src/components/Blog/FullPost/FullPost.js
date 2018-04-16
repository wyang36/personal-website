import React from 'react';
import classes from './FullPost.css';
import Button from '../../UI/Button/Button';
import { getImage } from '../../UI/PhotoMapping/PhotoMapping';

const fullPost = (props) => {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;

    let button = null;

    //add authentication for delete button later.
    const auth = false;

    if (auth) {
        button = <Button btnType="Danger" clicked={() => props.deleteClicked(props.loadedPost.id)}>Delete</Button>;
    }

    if (props.loadedPost) {
        post = (
            <div className={classes.FullPost}>
                <h1 className={classes.Title}>{props.loadedPost.title}</h1>
                <div className={classes.AuthorAndDate}>
                    By <span style={{ color: '#e46a6b' }}>{props.loadedPost.author}</span>
                    &nbsp;on <span style={{ color: '#e46a6b' }}>{new Date(props.loadedPost.date).toDateString()}</span>
                </div>
                <div className={classes.Container}>
                    <div className={classes.Photo}
                        onClick={() => props.imageClicked(getImage('blog/' + props.loadedPost.image))}
                        style={{ backgroundImage: `url(${getImage('blog/' + props.loadedPost.image)})` }}></div>
                    <div className={classes.ParagraphDiv}>
                        <p>{props.loadedPost.body}</p>
                    </div>
                </div>
                {button}
            </div>

        );
    }
    return post;
}

export default fullPost;