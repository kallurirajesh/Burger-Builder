import React from 'react';
import burgerLogo from '../../assests/images/burger-logo.png';
import styles from './Logo.module.css';

const logo = (props) => (
    <div className = {styles.Logo} style = {{height:props.height}}>
        <img src = {burgerLogo} alt = 'My Burger'></img>
    </div>
);

export default logo;