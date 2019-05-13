import React, { Component } from 'react';
import Auxilary from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES ={
    salad: 0.5,
    bacon: 0.6,
    cheese: 0.8,
    meat:2.0
}

class BurgerBuilder extends Component{

    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice : 4,
        purchaseable: false,
        purchasing: false
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + INGREDIENT_PRICES[type];
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        this.setState({ingredients:updatedIngredients, totalPrice:updatedPrice});
        this.updatePurchaseableState(updatedIngredients);
        
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const oldPrice = this.state.totalPrice;
        if(oldCount!==0){
            const updatedCount = oldCount - 1;
            const updatedPrice = oldPrice - INGREDIENT_PRICES[type];
            const updatedIngredients = {...this.state.ingredients};
            updatedIngredients[type] = updatedCount;
            this.setState({ingredients:updatedIngredients, totalPrice:updatedPrice});
            this.updatePurchaseableState(updatedIngredients);
        }
        
    };

    updatePurchaseableState(currentState) {
        const sum = Object.keys(currentState).map((key) => {
            return currentState[key];
        }).reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        },0);
        this.setState({purchaseable: sum>0})
    };

    orderedClicked = () => {
        this.setState({purchasing:true});
    };

    orderCancelled = () => {
        this.setState({purchasing:false});
    };

    orderContinued = () => {
        alert('hi');
    };

    render(){
        const disabledIngredientInfo = {...this.state.ingredients};
        for(let key in disabledIngredientInfo){
            disabledIngredientInfo[key] = disabledIngredientInfo[key]<=0
        }
        return(
            <Auxilary>
                <Modal show = {this.state.purchasing} orderCancelled = {this.orderCancelled}>
                    <OrderSummary 
                        ingredients = {this.state.ingredients}
                        orderCancelled = {this.orderCancelled}
                        orderContinued = {this.orderContinued}
                        totalPrice = {this.state.totalPrice}
                        ></OrderSummary>
                </Modal>
                <Burger ingredients = {this.state.ingredients}></Burger>
                <BuildControls 
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabledInfo = {disabledIngredientInfo}
                    price = {this.state.totalPrice}
                    purchaseable = {this.state.purchaseable}
                    purchasing = {this.orderedClicked}
                    >
                </BuildControls>
            </Auxilary>
        );
    };
}
export default BurgerBuilder;