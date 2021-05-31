import React, { useState, useEffect, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import router from './router/index';
import Loading from './common/Loading';
import './style/style.scss'

const App = () => {
  return (
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            {router.map((route, i) => (
              <Route key={i} exact={route.exact} path={route.path} component={route.component} />
            ))}
          </Switch>
        </Suspense>
      </Router>
  )
}
export default App;
