import React from 'react';
import Layout from './components/Layouts/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import {Route, Switch} from 'react-router-dom';
import Orders from './containers/Orders/Orders';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/checkout" component = {Checkout}></Route>
          <Route path="/orders" component = {Orders}></Route>
          <Route path="/" exact component = {BurgerBuilder}></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
