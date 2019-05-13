import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxilary from '../../../hoc/Auxilary';
const sideDrawer = (props) => {
    let attachedClasses = [styles.SideDrawer, styles.Close];
    if(props.open){
        attachedClasses = [styles.SideDrawer, styles.Open]
    }
    return(
        <Auxilary>
            <Backdrop show = {props.open} orderCancelled = {props.closed} >
            </Backdrop>
            <div className = {attachedClasses.join(' ')}>
                <div className = {styles.Logo}>
                <Logo />
                </div>
                <nav>
                <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Auxilary>
        
    );
};

export default sideDrawer;