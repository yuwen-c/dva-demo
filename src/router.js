import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage/IndexPage";
import ProductPage from "./routes/ProductPage/ProductPage";

// << 頁面跳轉設定 >>
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" component={ProductPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
