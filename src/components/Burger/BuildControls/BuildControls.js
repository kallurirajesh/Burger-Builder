import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type:'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'}
  ];


const buildControls = (props) => {
    console.log(props.disabledInfo);
    const buildCtrls = controls.map((control) => {
        return (
            <BuildControl 
                key = {control.label} 
                label = {control.label}
                added = {() => props.ingredientAdded(control.type)}
                removed = {props.ingredientRemoved.bind(null,control.type)}
                disabled = {props.disabledInfo[control.type]}
                ></BuildControl>
        );
    })
    return(
        <div className={styles.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {buildCtrls}
            <button className={styles.OrderButton} 
            disabled = {!props.purchaseable}
            onClick = {props.purchasing}
            >ORDER NOW</button>
        </div>
    );
};

export default buildControls;