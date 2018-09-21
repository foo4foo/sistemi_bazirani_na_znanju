import React from "react";
import { instanceOf } from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { withCookies, Cookies } from "react-cookie";

import { Timeline } from "react-twitter-widgets";
import { Row, Col } from "react-flexbox-grid";
import { Navigation } from "./components/navigation/navigation";

import Login from "./components/session/login";
import Patients from "./containers/patients";
import Home from "./containers/home/home";
import NewCase from "./containers/new_case/NewCase";
import IntesiveCare from "./containers/intesive_care";

class Main extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  render() {
    return (
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
                      <Route exact path="/new_case" component={NewCase} />
                      <Route
                        exact
                        path="/intesive_care"
                        component={IntesiveCare}
                      />
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
    );
  }
}

export default withCookies(Main);
