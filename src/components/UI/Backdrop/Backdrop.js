import React from 'react';
import styles from './Backdrop.module.css';

const backdrop = (props) => {
    return(
        props.show ? <div className={styles.Backdrop} onClick = {props.orderCancelled}></div>  : null
    )
};

export default backdrop;