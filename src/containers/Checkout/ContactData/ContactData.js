import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        orderForm : {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation : {
                    required:true
                },
                valid : false,
                touched : false
            },
            street:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation : {
                    required:true
                },
                valid : false,
                touched : false
            },
            zipcode:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZipCode'
                },
                value: '',
                validation : {
                    required:true,
                    minlength:5,
                    maxlength:5
                },
                valid : false,
                touched : false
            },
            country:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation : {
                    required:true
                },
                valid : false,
                touched : false
            },
            email:{
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation : {
                    required:true
                },
                valid : false,
                touched : false
            },
            deliveryMethod:{
                elementType: 'select',
                elementConfig: {
                   options : [
                       {value:'fastest', displayValue: 'Fatest'},
                       {value:'cheapest', displayValue: 'Cheapest'}
                   ]
                },
                value: '',
                validation:{},
                valid:true
            }
            
        },
        loading:false,
        isFormValid : false

    };

    checkValidity(value, rules){
        let isValid = true;
        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minlength){
            isValid = value.length >= rules.minlength && isValid;
        }
        if(rules.maxlength){
            isValid = value.length <= rules.maxlength && isValid;
        }
        return isValid;
    }

    inputChangedHandler = (event, formElementId) => {
        console.log(event);
        const updatedOrderForm = {...this.state.orderForm};
        const updatedFormElement = {...updatedOrderForm[formElementId]};
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[formElementId] = updatedFormElement;
        let isFormValid = true;
        for(let validInputElement in updatedOrderForm){
            isFormValid = updatedOrderForm[validInputElement].valid && isFormValid;
        }

        this.setState({orderForm:updatedOrderForm, isFormValid: isFormValid})
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props);
        let formData = {};
        for(let formElement in this.state.orderForm){
            formData[formElement] = this.state.orderForm[formElement].value;
        }
        this.setState({loading:true});
       const order = {
           ingredients: this.props.ingredients,
           price:this.props.price,
           orderData:formData
           
       };
       try {
       axios.post('/orders.json', order)
       .then(response => {
        this.setState({loading:false});
        this.props.history.push("/");
       });
       }catch(error){
        console.log(error);
        this.setState({loading:false});
       };
    }
    render(){
        let formElementsArray = [];
        for(let key in this.state.orderForm){
            formElementsArray.push(
                {
                    id:key,
                    config: this.state.orderForm[key]
                }
            );
        }
        let form = (
            <form onSubmit ={this.orderHandler}>
                    {formElementsArray.map(formElement => {
                        return <Input 
                        key = {formElement.id}
                        elementType = {formElement.config.elementType} 
                        elementConfig= {formElement.config.elementConfig}
                        value= {formElement.config.value}
                        invalid = {!formElement.config.valid}
                        shouldValidate = {formElement.config.validation}
                        touched = {formElement.config.touched}
                        changed = {(event) => this.inputChangedHandler(event, formElement.id)}
                        />
                    })}
                    <Button btnType ="Success" disabled = {!this.state.isFormValid}> ORDER </Button>
            </form>
        );
        if(this.state.loading){
            form = <Spinner/>;
        }
        return(
            <div className = {styles.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        );
    };
};

export default ContactData;