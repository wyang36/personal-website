import React from 'react';
import classes from './Experience.css';

const experience = (props) => {
    return (
        <div className={classes.ExperienceWrapper}>
            <div className={classes.Employer}>{props.info.employer}</div>
            <div className={classes.RoleAndTime}>
                <span style={{float: 'left'}}>{props.info.role}</span>
                <span style={{float: 'right'}}>{props.info.time}</span>
            </div>
            <div><p>{props.info.description}</p></div>
        </div>
    );
}

export default experience;