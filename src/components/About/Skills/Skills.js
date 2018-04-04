﻿import React from 'react';
import classes from './Skills.css';

import SkillCategory from './SkillCategory/SkillCategory';

const skills = () => {
    const skills = [];

    let skillcategory = {
        category: 'Languages',
        skills: ['Javascript (ES6)/JSX', 'HTML', 'CSS/Sass', 'C#', 'SQL', 'C++']
    }
    skills.push(skillcategory);

    skillcategory = {
        category: 'Frameworks/Libraries',
        skills: ['ReactJS', 'VueJS', 'NodeJS', 'D3', '.NET']
    }
    skills.push(skillcategory);

    skillcategory = {
        category: 'Tools',
        skills: ['Git/Github', 'Subversion', 'MS Visual Studio', 'Adobe Photoshop']
    }
    skills.push(skillcategory);

    skillcategory = {
        category: 'Climbing',
        skills: ['Belay certified', 'Lead certified']
    }
    skills.push(skillcategory);

    return (
        <div className={classes.Container}>
            <div className={classes.HeaderBox}>SKILLS</div>
            <div className={classes.SkillsContainer}>
                {skills.map(skill => {
                    return <SkillCategory
                        key={skill.category}
                        info={skill}
                    />
                })
                }
            </div>
        </div>
    );
}


export default skills;