import React from 'react';
import classes from './Experiences.css';

import Experience from './Experience/Experience';

const experiences = () => {
    const experiences = [];

    let experience = {
        id: 0,
        employer: 'Knock.com',
        role: 'Front End Engineer',
        time: 'July 2018 - Current',
        description: `This is my second web developer job and my first to use React/Node and other open source technology. 
        I'm in the team responsible for the public facing website and the internal application. `
    }

    experiences.push(experience);

    experience = {
        id: 1,
        employer: 'ProfitSword LLC',
        role: 'Senior Software Engineer',
        time: 'Jan 2014 - July 2018',
        description: `This is my first job out of college and I was in a team responsible for rewriting the biggest product
         to a more modern looking single page application using newer technologies. Because of this, I learned about all sorts of technologies used throughout the whole stack
         and experimented with a bunch more. In 2017 I self-taught VueJS and lead the company wide effort to rewrite the entire application for the second time. 
         I was promoted to senior engineer afterwards.`
    }

    experiences.push(experience);

    experience = {
        id: 2,
        employer: 'Panasonic Automotive Systems of America',
        role: 'Tools Software Co-op',
        time: 'Jan - May 2013',
        description: `This is my last co-op term during my time at Georgia Tech. I assisted in the programming of the GUIs used for tesing. My biggest project was to design and
        program buttons in the GUI to mimic the ones on a car radio, so the testers can control the radio from their computers.
        I learned a lot of Windows Forms and had a lot of fun!`
    }

    experiences.push(experience);

    experience = {
        id: 3,
        employer: 'Panasonic Automotive Systems of America',
        role: 'Test Development Co-op',
        time: 'May - August 2012, Aug - Dec 2011',
        description: `These are my first 2 co-op terms, and since I was a EE major, my role was more electronics related.
        I was mainly responsible for building and troubleshooting PCBs, connectors, and harnesses. `
    }

    experiences.push(experience);

    return (
        <div className={classes.Container}>
            <div className={classes.HeaderBox}>EXPERIENCES</div>
            <div className={classes.ExperiencesContainer}>
                {experiences.map(exp => {
                    return <Experience
                        key={exp.id}
                        info={exp}
                    />
                })
                }
            </div>
        </div>
    );
}

export default experiences;