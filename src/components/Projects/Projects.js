import React from 'react';
import Project from './Project/Project';
import classes from './Projects.css';

const projects = (props) => {
    const projects = props.projects.map(
        project => {
            return <Project
                key={project.id}
                title={project.title}
                body={project.description}
                demoLink={project.link}
                codeLink={project.githubLink}
                status={project.status}
                technologies={project.technologies}
                image={project.image}
            />
        }
    );

    return (
        <section className={classes.Projects}>
            {projects}
        </section>
    );

}

export default projects;
