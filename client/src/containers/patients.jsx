import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Row, Col } from "react-flexbox-grid";

import GroupIcon from "grommet/components/icons/base/Group";
import TestIcon from "grommet/components/icons/base/Test";
import TriggerIcon from "grommet/components/icons/base/Trigger";
import AedIcon from "grommet/components/icons/base/Aed";
import { Paragraph, Box, Title, Header, Select } from "grommet";

import "./patients.css";

class Patients extends Component {
  render() {
    return (
      <div className="patients-container">
        <Header splash={false} size="small" float={false} fixed={false}>
          <GroupIcon />
          <Box flex={true} justify="end" direction="row" responsive={false}>
            <Select
              className="patients-search"
              placeHolder="Search patients ..."
              inline={false}
              multiple={false}
              onSearch={false}
              options={[
                "Patients will possible chronical illnesses",
                "Possible addicts",
                "Patients will immunity issues"
              ]}
              value={undefined}
            />
          </Box>
        </Header>
        <div className="patients">
          <div className="patient">
            <Row>
              <Col md={2} className="patient-side-col">
                <div>
                  <TestIcon size="large" colorIndex="ok" />
                  <br />
                  <span>Addiction issues</span>
                </div>
              </Col>
              <Col md={7} className="patient-center-col">
                <div>
                  <Title>Pera Peric - 18.10.1967.</Title>
                  <Paragraph>Short medical history ...</Paragraph>
                </div>
              </Col>
              <Col md={3} className="patient-side-col diagnosis-date-holder">
                <div>
                  <p>Last diagnosis:</p>
                  <p>17.06.2018.</p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="patient">
            <Row>
              <Col md={2} className="patient-side-col">
                <div>
                  <AedIcon size="large" colorIndex="accent-2" />
                  <br />
                  <span>Immunity Issues</span>
                </div>
              </Col>
              <Col md={7} className="patient-center-col">
                <div>
                  <Title>Pera Peric - 18.10.1967.</Title>
                  <Paragraph>Short medical history ...</Paragraph>
                </div>
              </Col>
              <Col md={3} className="patient-side-col diagnosis-date-holder">
                <div>
                  <p>Last diagnosis:</p>
                  <p>17.06.2018.</p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="patient">
            <Row>
              <Col md={2} className="patient-side-col">
                <div>
                  <TriggerIcon size="large" colorIndex="critical" />
                  <br />
                  <span>Chronical issues</span>
                </div>
              </Col>
              <Col md={7} className="patient-center-col">
                <div>
                  <Title>Pera Peric - 18.10.1967.</Title>
                  <Paragraph>Short medical history ...</Paragraph>
                </div>
              </Col>
              <Col md={3} className="patient-side-col diagnosis-date-holder">
                <div>
                  <p>Last diagnosis:</p>
                  <p>17.06.2018.</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.users.user });

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Patients)
);
