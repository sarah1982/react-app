import React,{ Component } from 'react';
import classes from '../BurgerIngredients/BurgerIngredients.css';
import PropTypes from 'prop-types';

class BurgerIngredients extends Component{

    render(){
    let ingredients=null;    
        switch(this.props.ingredients){
            case ('bread-bottom'): 
                ingredients=<div className={classes.BreadBottom}></div>
                break;
            
            case ('bread-top'):
                ingredients=(
                    <div className={classes.BreadTop}>
                         <div className={classes.Seeds1}></div>
                         <div className={classes.Seeds2}></div>
                    </div>
                )
                break;
            
            case ('meat'):
                ingredients=<div className={classes.Meat}></div>
                break;
            
            case ('cheese'):
                ingredients=<div className={classes.Cheese}></div>
                break;
            
            case ('bacon'):
                ingredients=<div className={classes.Bacon}></div>
                break;
            
            case ('salad'):
                ingredients=<div className={classes.Salad}></div>
                break;
            
            default: 
                ingredients=null;
           
        }
            return ingredients;
            }
        }


BurgerIngredients.propTypes={
    ingredients:PropTypes.string.isRequired
};


export default BurgerIngredients;