import React from 'react';
import classes from './Post.css';

const post = (props) => (
    <article className={classes.Post} onClick={props.clicked}>
        <h1 className={classes.Title}>{props.title}</h1>
        <span className={classes.Date}>{new Date(props.date).toDateString()}</span>
        <p>{props.body.slice(0, 50)}...</p>
    </article>
);

export default post;