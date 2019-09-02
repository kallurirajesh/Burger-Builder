import React, {Component} from 'react';
import Auxilary from '../../hoc/Auxilary';
import styles from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import {BrowserRouter} from 'react-router-dom';

class Layout extends Component {
    state ={
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    };

    sideDrawerShowHandler = () => {
        let currentState = this.state.showSideDrawer;
        this.setState({showSideDrawer: !currentState})
    }

    render(){
        return(
           <BrowserRouter>
            <Auxilary>
                <Toolbar openSideDrawer = {this.sideDrawerShowHandler}></Toolbar>
                <SideDrawer open = {this.state.showSideDrawer} closed = {this.sideDrawerClosedHandler}></SideDrawer>
                <main className={styles.Content}>
                    {this.props.children}
                 </main>
             </Auxilary>
             </BrowserRouter>
        );
    };
}
export default Layout;