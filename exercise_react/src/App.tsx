import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import './style/style.scss'

const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={BlogList} />
          <Route path="/:id" component={BlogDetail} />
        </Switch>
      </Router>
  )
}
export default App;
