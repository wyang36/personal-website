import React from 'react';
import classes from './Project.css';

const project = (props) => {
    const technologies = [];
    for (let key in props.technologies) {
        if (props.technologies[key] === 'high')
            technologies.unshift(<li key={key}>{key}</li>)
        else
            technologies.push(<li key={key}>{key}</li>)
    }

    const project = (
        <div className={classes.Project}>
            <h1 className={classes.Title}>{props.title}</h1>
            <div className={classes.Status}>
                Status:&nbsp;<span className={classes[props.status.replace(' ', '')]}>{props.status}</span>
            </div>
            <div className={classes.Container}>
                <div className={classes.Photo}
                    style={{ backgroundImage: `url(${props.image})` }}></div>
                <div className={classes.ParagraphDiv}>
                    <div className={classes.Links}>
                        <a href={props.demoLink} target="_blank">Demo</a>
                        <a href={props.codeLink} target="_blank">Code</a>
                    </div>
                    <p>{props.body}</p>
                    <ul>
                        {technologies}
                    </ul>
                </div>
            </div>
        </div>

    );

    return project;
}

export default project;