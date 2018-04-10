import React from 'react';
import classes from './About.css';

import AboutSummary from './AboutSummary/AboutSummary';
import Skills from './Skills/Skills';
import Experices from './Experiences/Experiences';

const about = () => (
    <div className={classes.AboutContainer}>
        <AboutSummary />
        <Skills />
        <Experices />
    </div>
);


export default about;