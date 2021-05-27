import React, { useState, useEffect } from 'react';
import Blog from './screens/Blog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './style/style.scss'
import PostDetail from './components/PostDetail';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Blog />
          </Route>
          <Route path="/:id">
            <PostDetail />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
export default App;
