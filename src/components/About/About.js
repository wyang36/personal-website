import React from 'react';
import classes from './About.css';

import AboutSummary from './AboutSummary/AboutSummary';
import Skills from './Skills/Skills';

const about = () => (
    <div className={classes.AboutContainer}>
        <AboutSummary />
        <Skills />
    </div>
);


export default about;