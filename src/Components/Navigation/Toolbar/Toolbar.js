import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
const toolbar=(props)=>{
    return(
        <header className={classes.Toolbar}>
        <button onClick={props.clicked}className={classes.Menu}>Menu</button>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
        </header>
    )
}


export default toolbar;