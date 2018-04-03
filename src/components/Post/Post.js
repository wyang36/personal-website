import React from 'react';
import classes from './Post.css';

const post = (props) => (
    <article className={classes.Post} onClick={props.clicked}>
        <h1>{props.title}</h1>
        <p>{props.body.slice(0,20)}...</p>
        <div className="Info">
            <div className="Author">by {props.author}</div>
        </div>
    </article>
);

export default post;