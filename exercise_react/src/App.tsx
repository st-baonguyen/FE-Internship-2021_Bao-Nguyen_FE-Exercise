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
        {/* <Blog /> */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/article">Article</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Blog />
          </Route>
          <Route path="/article">
            <PostDetail />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
export default App;
