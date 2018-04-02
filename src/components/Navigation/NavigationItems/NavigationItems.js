import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems} >
        <NavigationItem link="/" active>Home</NavigationItem>
        <NavigationItem link="/about-me">About Me</NavigationItem>
        <NavigationItem link="/projects">Projects</NavigationItem>
        <NavigationItem link="/blog">Blog</NavigationItem>
        <NavigationItem link="/contact">Contact Me</NavigationItem>
    </ul>
);

export default navigationItems;