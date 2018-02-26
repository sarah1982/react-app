import React from 'react';
import classes from './Logo.css';
import burger from '../../assets/images/burger-logo.png';
const logo=(props)=>(
    <div className={classes.Logo} style={{height:props.height}}>
    <img src={burger} alt='burger'/>
    </div>
)

export default logo;