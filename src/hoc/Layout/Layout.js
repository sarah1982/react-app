import React,{Component} from 'react';
import Aux from '../Aux/Aux';
import classes from '../Layout/Layout.css';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';
class Layout extends Component{
    state={
        showSideDrawer:false
    }
    sideDrawerClosedHandler=()=>{
        this.setState({
            showSideDrawer:false
        })
    }
    sideDrawerOpenHandler=()=>{
        this.setState((prevState)=>{
            return{showSideDrawer:!prevState.showSideDrawer}
        })
    }
    render(){
        return(<Aux className={classes.Content}>
            <Toolbar clicked={this.sideDrawerOpenHandler}/>
            <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerClosedHandler}/>
            <main>{this.props.children}</main>
        </Aux>  )  
    }
}
    


export default Layout;