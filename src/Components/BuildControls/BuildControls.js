import React from 'react';
import classes from '../BuildControls/BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls=[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'}
];


const BuildControls=(props)=>(
<div className={classes.BuildControls}>
    <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>
        {controls.map((cntrl)=>{
            return <BuildControl key={cntrl.label} label={cntrl.label} 
            ingredientAdd={()=>props.added(cntrl.type)}
            ingredientRemove={()=>props.removed(cntrl.type)}
            disabledInfo={props.disabledInfo[cntrl.type]}
            />
    })}
    <button className={classes.OrderButton} disabled={!props.purchasing} onClick={props.purchase}>ORDER NOW</button>

</div>
)

export default BuildControls;