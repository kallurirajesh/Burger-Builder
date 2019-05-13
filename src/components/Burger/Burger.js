import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(
        igkey => {
            return [...Array(props.ingredients[igkey])].map((_,index) => {
                return (
                    <BurgerIngredient key = {igkey+index} type = {igkey}></BurgerIngredient>
                );
            })
        }
    ).reduce((accumulator, currentValue)=>{
        return accumulator.concat(currentValue);
    },[]);
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please Start Adding Ingredients</p>;
    }
    return(
        <div className={styles.Burger}>
            <BurgerIngredient type = 'bread-top'></BurgerIngredient>
                {transformedIngredients}
            <BurgerIngredient type = 'bread-bottom'></BurgerIngredient>
        </div>
    );
}

export default burger;