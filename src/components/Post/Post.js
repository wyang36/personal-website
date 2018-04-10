import React from 'react';
import classes from './Post.css';

const post = (props) => (
    <article className={classes.Post} onClick={props.clicked}>
        <h1 className={classes.Title}>{props.title}</h1>
        <p>{props.body.slice(0, 50)}...</p>
        <div className={classes.Author}>by {props.author}</div>
    </article>
);

export default post;