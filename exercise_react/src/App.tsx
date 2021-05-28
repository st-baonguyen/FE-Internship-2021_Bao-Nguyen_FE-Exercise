import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './style/style.scss'
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <BlogList />
          </Route>
          <Route path="/:id">
            <BlogDetail />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
export default App;
