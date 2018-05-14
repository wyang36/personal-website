import React from 'react';
import classes from './Project.css';

const project = (props) => {
    const technologies = [];
    const technologySorted = Object.keys(props.technologies).sort(function (a, b) { return props.technologies[a] - props.technologies[b] })
    for (let key in technologySorted) {
        technologies.push(<li key={key}>{technologySorted[key]}</li>)
    }

    technologies.sort(function (a, b) {
        return a.value - b.value;
    });

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