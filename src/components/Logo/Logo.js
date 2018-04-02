import React from 'react';
import Logo from '../../assets/images/website-icon.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{ height: props.height }}>
        <img src={Logo} alt="MyLogo"/>
    </div>
);

export default logo;