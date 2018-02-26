import React from 'react'
import Burger from '../../Containers/Burger/Burger';
import Button from '../UI/Button/Button';
import classes from '../Order/CheckoutSummary.css';
const CheckoutSummary=(props)=>{
return(<div className={classes.CheckoutSummary}>
            <h1> Hope you like it!!!</h1>
            <div style={{width:'100%',margin:'auto'}}><Burger ingredients={props.ingredients}/></div>
            <div>
                <Button btnType="Danger" clicked={props.checkoutCancel}>CANCEL</Button>
                <Button btnType="Success" clicked={props.checkoutContinue}>CONTINUE</Button>
            </div>
        </div>)
}


export default CheckoutSummary;