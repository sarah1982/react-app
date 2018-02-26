import React from 'react';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import classes from '../Burger/Burger.css';
const Burger=(props)=>{
    let transformedIngredients=Object.keys(props.ingredients)
    .map((igKey=>{
        return [...Array(props.ingredients[igKey])].map((_,i) => {
            return <BurgerIngredients key={igKey + i} ingredients={igKey}/>})
        })).reduce((arr,el)=>{return arr.concat(el)},[]);  
        if(transformedIngredients.length===0){
             transformedIngredients=<p>Please select the ingredients!!!</p> 
        }
    return(
    <div className={classes.Burger}>
    <BurgerIngredients ingredients='bread-top'/>
        {transformedIngredients}
    <BurgerIngredients ingredients="bread-bottom"/>

</div>
    )
}   
export default Burger;