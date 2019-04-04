import React from 'react';
import { Router, Route, Switch, NavLink } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Products from './routes/products'

function RouterConfig({ history }) {
  // exact 的值为bool型，为true是表示严格匹配，为false时为正常匹配。
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products"  component={Products} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
