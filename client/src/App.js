import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { Timeline } from "react-twitter-widgets";
import { Row, Col } from "react-flexbox-grid";
import { Navigation } from "./components/navigation/navigation";

import "./App.css";
import "../node_modules/grommet-css";

import { Paragraph, Box, Title, Footer } from "grommet";

import TriggerIcon from "grommet/components/icons/base/Trigger";

import Grommet from "grommet";

import Login from "./components/session/login";
import Patients from "./containers/patients";
import Home from "./containers/home/home";

class App extends Component {
  render() {
    return (
      <Grommet.App centered={false}>
        <Provider store={store}>
          <div>
            <main>
              <Router>
                <Switch>
                  {localStorage.getItem("jwt") ? (
                    <Row>
                      <Navigation />
                      <Row className="home-container">
                        <Col md={3} className="twitter-container">
                          <Timeline
                            dataSource={{
                              sourceType: "profile",
                              screenName: "health"
                            }}
                            options={{
                              username: "TwitterDev"
                            }}
                            onLoad={() => console.log("Timeline is loaded!")}
                          />
                        </Col>
                        <Col md={9}>
                          <Route exact path="/" component={Home} />
                          <Route exact path="/patients" component={Patients} />
                          <Footer justify="between" className="footer">
                            <Title>
                              <TriggerIcon colorIndex="brand" />
                            </Title>
                            <Box
                              direction="row"
                              align="center"
                              pad={{
                                between: "medium"
                              }}
                            >
                              <Paragraph margin="none">
                                © 2018 Vivacious Giddy
                              </Paragraph>
                            </Box>
                          </Footer>
                        </Col>
                      </Row>
                    </Row>
                  ) : (
                    <Route exact path="/login" component={Login} />
                  )}
                  {!localStorage.getItem("jwt") && <Redirect to="/login" />}
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
