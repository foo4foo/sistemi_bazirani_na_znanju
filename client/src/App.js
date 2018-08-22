import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

import Main from "./Main";

import { CookiesProvider } from "react-cookie";

import "./App.css";
import "../node_modules/grommet-css";

import Grommet from "grommet";

class App extends Component {
  render() {
    return (
      <Grommet.App centered={false}>
        <CookiesProvider>
          <Provider store={store}>
            <Main />
          </Provider>
        </CookiesProvider>
      </Grommet.App>
    );
  }
}

export default App;
