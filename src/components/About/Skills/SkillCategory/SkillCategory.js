import React from 'react';
import classes from './SkillCategory.css';

const skillcategory = (props) => {
    return (
        <div className={classes.SkillCategory}>
            <div className={classes.Title}>{props.info.category.toUpperCase()}</div>
            <div>
                <ul>
                    {props.info.skills.map((skill, index) => {
                        return <li key={index}>{skill}</li>
                    })
                    }
                </ul>
            </div>
        </div>
    );
}


export default skillcategory;