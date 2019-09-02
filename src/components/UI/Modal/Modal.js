import React, {Component} from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Auxilary from '../../../hoc/Auxilary';
class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return  nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    };
    
    render(){
        return (
            <Auxilary>
                <Backdrop show = {this.props.show} orderCancelled = {this.props.orderCancelled}></Backdrop>
                <div className = {styles.Modal}
                    style ={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
            </div>
        </Auxilary>
        )
    }
}

export default Modal;