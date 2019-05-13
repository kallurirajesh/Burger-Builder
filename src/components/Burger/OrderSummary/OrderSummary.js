import React from 'react';
import Auxilary from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientList = Object.keys(props.ingredients).map(
        (igKey, index) => {
            return <li key={igKey + index}><span style={{textTransform:"capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}</li>
        }
    );
    return(
        <Auxilary>
            <h3>Your Order</h3>
            <p>A Delicious Burger With Following Ingredients:</p>
            <ul>
             { ingredientList}
            </ul>
            <p><strong>Total Price:</strong> {props.totalPrice.toFixed(2)} </p>
            <p>Do you wish to Continue</p>
            <Button clicked={props.orderCancelled} btnType = 'Danger'>CANCEL</Button>
            <Button clicked={props.orderContinued} btnType = 'Success'>CONTINUE</Button>
        </Auxilary>

    );
}

export default orderSummary;