import React from 'react';
import classes from '../BuildControl/BuildControl.css';
const BuildControl=(props)=>(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.More} onClick={props.ingredientAdd}>More</button>
        <button className={classes.Less} onClick={props.ingredientRemove} disabled={props.disabledInfo}>Less</button>
       
     </div>   
)

export default BuildControl;