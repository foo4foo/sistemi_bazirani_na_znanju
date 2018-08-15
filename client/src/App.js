import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import '../node_modules/grommet-css';

import Login from './components/session/login';
import Header from './components/header';
import Index from './containers/home';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <Header />
        <main>
          <Router>
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </Router>
        </main>
      </div>
      </Provider>
    );
  }
}

export default App;
