import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import '../node_modules/grommet-css';

import Grommet from 'grommet';

import Login from './components/session/login';
import Index from './containers/home';

class App extends Component {
  render() {
    return (
      <Grommet.App centered={false}>
        <Provider store={store}>
          <div>
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
      </Grommet.App>
    );
  }
}

export default App;
