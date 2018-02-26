import React,{Component} from 'react';
import Button from '../../../Components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../Components/UI/Spinner/Spinner';

class ContactData extends Component{
state={
    name:'',
    email:'',
    address:{
        street:'',
        postalcode:''
    },
    loading:false
}
orderHandler=(event)=>{
event.preventDefault();
  this.setState({loading:true})
  console.log(this.props.price)
        const orders={
            ingredients:this.props.ingredients,
            price:this.props.price,
            customer:{
                Name:'Saradha',
                address:{
                    street:'friar st',
                    country:'woodland hills'
                },
                delivery:'fastest',
                email:'saradha@gmail.com'
            },
            deliverymethod:'fastest'
        }
        axios.post('/orders.json',orders)
        .then(response=>{
            this.setState({loading:false
              })
              this.props.history.push('/');
        })
        .catch(error=>{
            this.setState({loading:false
                })
        })
}
render(){
    let form=(
        <form>
        <input type="text" className={classes.Input} name="name" placeholder="Your Name" />
        <input type="email"className={classes.Input} name="email" placeholder="Your Name" />
        <input type="text" className={classes.Input} name="street" placeholder="Your street" />
        <input type="text"  className={classes.Input} name="postal" placeholder="Your postal" />
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>

         </form>
    );
    if(this.state.loading){
       form= <Spinner/>
    }
    return(
        <div className={classes.ContactData}>
            <h4>Enter your contact data</h4>
            {form}
        </div>
    )
}

}

export default ContactData;