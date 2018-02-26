import React,{Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../Burger/Burger';
import BuildControls from '../../Components/BuildControls/BuildControls';
import Modal from '../../Components/Modal/Modal';
import axios from '../../axios-orders';
import Spinner from '../../Components/UI/Spinner/Spinner';
import OrderSummary from '../../Components/OrderSummary/OrderSummary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICE={
    salad:0.5,
    meat:1.5,
    bacon:0.7,
    cheese:2.0
}
    class BurgerBuilder extends Component{
    state={
        ingredients:null,
        price:4.0,
        purchaseable:false,
        purchasing:false,
        loading:false,
        error:false
    }
    componentDidMount(){
        axios.get('https://burgerbuilder-e6202.firebaseio.com/ingredients.json')
        .then(response=>{
            this.setState({ingredients:response.data})
        }).catch(error=>{
            this.setState({error:true})
        })
    }
    purchasehandler=()=>{
        this.setState({
            purchasing:true
        })
    }
    purchaseCancelhandler=()=>{
        this.setState({
            purchasing:false
        })
    }
    purchaseContinuehandler=()=>{
     
        const queryParams=[];
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price=' + this.state.price);
        const queryString=queryParams.join('&');

        this.props.history.push({
            pathname:'/checkout',
            search:'?' + queryString
        });
    }
    updatePurchaseState=(ingredients)=>{
       
        const sum=Object.keys(ingredients).map(igKey=>{
            return  ingredients[igKey]
        }).reduce((sum,el)=>{
        return sum+el},0)
        this.setState({
            purchaseable:sum>0
        })
    }
    addIngredienthandler=(type)=>{
        let oldCount=this.state.ingredients[type];
        let updatedcount=oldCount+1;
        let updatedIngredients={
            ...this.state.ingredients
        }
         updatedIngredients[type]=updatedcount;
        let oldPrice=this.state.price;
        let updatedPrice=oldPrice+INGREDIENT_PRICE[type];
        this.setState({
            ingredients:updatedIngredients,
            price:updatedPrice
        })

       this.updatePurchaseState(updatedIngredients)
    }

    removeIngredienthandler=(type)=>{
        let oldCount=this.state.ingredients[type];
        if(oldCount>0){
            let updatedcount=oldCount-1;
            let updatedIngredients={
                ...this.state.ingredients
            }
            updatedIngredients[type]=updatedcount;
            let oldPrice=this.state.price;
            let updatedPrice=oldPrice-INGREDIENT_PRICE[type];
            this.setState({
                ingredients:updatedIngredients,
                price:updatedPrice
        })
        this.updatePurchaseState(updatedIngredients)
        
    }else{
        return;
    }
}
    render(){
        const disabledInfo={...this.state.ingredients};
        for (let key in disabledInfo){
        disabledInfo[key]=disabledInfo[key]<=0;
        }

        let orderSummary=null;
     
         let burger=this.state.error?<p>Ingredients cant be loaded</p>:<Spinner/>
         if(this.state.ingredients){
                 burger= (<Aux>
                <div><Burger ingredients={this.state.ingredients}/></div>
                <div><BuildControls added={this.addIngredienthandler} 
                removed={this.removeIngredienthandler}
                 disabledInfo={disabledInfo}
                 price={this.state.price}
                 purchasing={this.state.purchaseable}
                 purchase={this.purchasehandler}
                 /></div>
                 </Aux>)
                orderSummary = <OrderSummary
                ingredients={this.state.ingredients}
                purchaseCancelled={this.purchaseCancelhandler}
                purchaseContinued={this.purchaseContinuehandler}
                price={this.state.price}/>

        }
        if(this.state.loading){
            orderSummary=<Spinner/>
        
        }
    
        
        return(
            <Aux>
                <Modal purchasing={this.state.purchasing}
                ModalClose={this.purchaseCancelhandler}>
                    {orderSummary}
                </Modal>
                {burger}

             </Aux>   
        );
    }

    }

    export default withErrorHandler(BurgerBuilder,axios);