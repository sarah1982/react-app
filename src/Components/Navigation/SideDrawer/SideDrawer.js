import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer=(props)=>{
    let attachedClasses=[classes.SideDrawer,classes.Close]
    if(props.open){
     attachedClasses=[classes.SideDrawer,classes.open]
        
    }
    return(
        <Aux>
            <BackDrop show={props.open} clicked={props.close}/>
        <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
            <Logo/>
        </div>  
            <nav>
                <NavigationItems/>
             </nav>   
        </div>
        </Aux>
    );
}

export default sideDrawer;