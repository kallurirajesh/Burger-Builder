import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolBar = (props) => {
    return (
        <header className = {styles.Toolbar}>
           <DrawerToggle clicked = {props.openSideDrawer}></DrawerToggle>
            <Logo height= '90%'></Logo>
            <nav className = {styles.DesktopOnly}>
                <NavigationItems></NavigationItems>
            </nav>
        </header>
        
    );
};

export default toolBar;