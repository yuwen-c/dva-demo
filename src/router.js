import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage/IndexPage';
import ProductPage from './routes/Products/IndexPage';

// << 頁面跳轉 >>
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={ProductPage} />
      
      </Switch>
    </Router>
  );
}

export default RouterConfig;
