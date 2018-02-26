import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import Button from '../UI/Button/Button';

const OrderSummary=(props)=>{
    const orderlist=Object.keys(props.ingredients).map(igKey=>{
        return(
        <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>);
    })
    return( 
        <Aux>
            <h3>Your Order Summary:</h3>
        <p> Your Order has following ingredients:</p>
        <ul>
            {orderlist}
        </ul>
        <strong>Total Price : {props.price.toFixed(2)}</strong>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>CHECKOUT</Button>
        </Aux>
    );
}

export default OrderSummary;