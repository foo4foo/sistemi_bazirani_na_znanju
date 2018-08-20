import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestLogin } from "../../actions/session";

import Split from "grommet/components/Split";
import Box from "grommet/components/Box";
import LoginForm from "grommet/components/LoginForm";

import house from "../../assets/images/house.png";

import "./login.css";

class Login extends Component {
  submitForm = data => {
    this.props.requestLogin(data);
  };

  render() {
    return (
      <Split>
        <Box
          className="left-side"
          colorIndex="neutral-3"
          justify="center"
          align="center"
          pad="medium"
        >
          <img className="house" alt="house" src={house} />
        </Box>
        <Box justify="center" align="center" pad="medium">
          <LoginForm
            onSubmit={this.submitForm}
            secondaryText="Sample secondary text"
            usernameType="email"
            title="Sample Title"
          />
        </Box>
      </Split>
    );
  }
}

const mapStateToProps = state => ({ jwt: state.jwt, error: state.error });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      requestLogin
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
