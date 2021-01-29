import React from 'react';
import classes from './Intro.css';

const intro = () => (
    <div className={classes.Intro}>
        <h1 className={classes.FadeIn}>Hi! I'm <span>Kira</span>.</h1>
        <h2 className={classes.FadeIn}>I'm a full-stack <span>software engineer</span> and amateur rock climber based in Los Angeles CA.</h2>
    </div>
);


export default intro;