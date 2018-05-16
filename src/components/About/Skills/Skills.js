import React from 'react';
import classes from './Skills.css';

import SkillCategory from './SkillCategory/SkillCategory';

const skills = () => {
    const skills = [];

    let skillcategory = {
        category: 'Programming/Markup Languages',
        skills: ['Javascript (ES6)/JSX', 'HTML', 'CSS/Sass', 'C#', 'SQL', 'C++']
    }
    skills.push(skillcategory);

    skillcategory = {
        category: 'Frameworks/Libraries',
        skills: ['ReactJS', 'VueJS', 'Angular', 'NodeJS', 'jQuery', 'D3', '.NET']
    }
    skills.push(skillcategory);

    skillcategory = {
        category: 'Develeopement Tools',
        skills: ['Git/Github', 'Subversion', 'MongoDB', 'MS Visual Studio', 'Visual Studio Code', 'Adobe Photoshop']
    }
    skills.push(skillcategory);

    skillcategory = {
        category: 'Other',
        skills: ['Fluent in Mandarin', 'Belay certified', 'Lead certified']
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