import React from 'react';
import { Router, Route, Switch, NavLink } from 'dva/router';

import IndexPage from './routes/IndexPage';
import Products from './routes/products'
import Counter from './routes/conter'

function RouterConfig({ history }) {
  // exact 的值为bool型，为true是表示严格匹配，为false时为正常匹配。
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products"  component={Products} />
        <Route path="/counter"  component={Counter} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
