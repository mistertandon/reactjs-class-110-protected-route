import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Login from './components/login';
import Home from './components/home';
import ProtectedRoute from './routes/ProtectedRoute';
import './App.css';

class App extends Component {

  constructor(props) {

    super(props);
  }

  render() {


    return (
      <Router>
        <ul>
          <li>
            Itn
          </li>
        </ul>
        <Switch>
          <Route exact path='/' component={Login} />
          <ProtectedRoute exact path='/home' component={Home} />
        </Switch>
      </Router>

    );
  }


}

export default App;
