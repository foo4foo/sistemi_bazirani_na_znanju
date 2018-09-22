import React from "react";

import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { searchPatients, checkStatus } from "../../actions/patients";

import AccessibleIcon from "grommet/components/icons/base/Accessible";

import { Header, Box, Search, Animate, Notification } from "grommet";
import { Row, Col } from "react-flexbox-grid";
import { OxygenLevel } from "../../components/patient_stats/oxygen_level";
import { HeartBeat } from "../../components/patient_stats/heart_beat";
import UrinLevel from "../../components/patient_stats/urin_level";
import { PatientInfo } from "../../components/PatientInfo";

const notificationMessage = (
  rapidHeartRate,
  oxygenProblems,
  dialysisNeeded
) => {
  let messageArray = [];
  if (rapidHeartRate) messageArray.push("Rapid Heart Rate");
  if (oxygenProblems) messageArray.push("Oxygen Problems");
  if (dialysisNeeded) messageArray.push("Dialysis Needed");

  return messageArray.join(", ");
};

class IntesiveCare extends React.Component {
  state = {
    pattern: "",
    beatCount: 0,
    resetHeartTime: false,
    oxygenLevel: 80,
    urinAmount: 390,
    patient: undefined
  };

  toggleResetHeartTime = () => {
    this.setState({
      resetHeartTime: !this.state.resetHeartTime
    });
  };

  handleTextInput = event => {
    this.setState(
      {
        pattern: event.target.value
      },
      () => {
        this.props.searchPatients(this.state.pattern);
      }
    );
  };

  updateBeatCount = newCount => {
    this.setState({
      beatCount: newCount !== 0 ? this.state.beatCount + newCount : newCount
    });
  };

  setOxygenLevel = newLevel => {
    this.setState({
      oxygenLevel: this.state.oxygenLevel + newLevel
    });
  };

  setUrinAmount = newAmount => {
    const { urinAmount } = this.state;

    if (urinAmount + newAmount < 0) {
      this.setState({urinAmount: 0});
    } else {
      this.setState({
        urinAmount: this.state.urinAmount + newAmount
      });
    }
  };

  renderPatientSuggestions = patients => {
    return patients.map(patient => {
      return {
        label: `${patient.name}
    ${patient.surname}`,
        id: patient.id
      };
    });
  };

  onSelectPatient = patient => {
    const { patients } = this.props;

    this.setState({
      patient: patients.find(p => p.id === patient.id),
      oxygenLevel: 80,
      beatCount: 0,
      urinAmount: 670,
      resetHeartTime: true
    });
  };

  checkPatientStatus = () => {
    const { patient, beatCount, oxygenLevel } = this.state;

    if (patient) {
      this.props.checkStatus({
        patient: {
          id: patient.id,
          firstName: patient.name,
          lastName: patient.surname
        },
        stats: {
          heartBeats: beatCount,
          oxygenLevel,
          illnesses: patient.illnesses
        }
      });
    }
  };

  render() {
    const {
      pattern,
      beatCount,
      oxygenLevel,
      patient,
      resetHeartTime,
      urinAmount
    } = this.state;
    const {
      patients,
      dialysisNeeded,
      oxygenProblems,
      rapidHeartRate
    } = this.props;

    return (
      <div style={{height: '100vh', overflowY: 'auto', paddingRight: '5px', overflowX: 'hidden'}}>
        <Header splash={false} size="small" float={false} fixed={false}>
          <AccessibleIcon />
          <Box flex={true} justify="end" direction="row" responsive={false}>
            <Search
              onDOMChange={this.handleTextInput}
              value={pattern}
              inline={true}
              fill={true}
              size="medium"
              placeHolder="Search patients"
              onSelect={patient => this.onSelectPatient(patient.suggestion)}
              suggestions={this.renderPatientSuggestions(patients)}
            />
          </Box>
        </Header>
        <br />{" "}
        <Animate
          keep={false}
          visible={dialysisNeeded || rapidHeartRate || oxygenProblems}
          enter={{
            animation: "slide-up",
            duration: 500,
            delay: 100
          }}
        >
          <Notification
            message={notificationMessage(
              rapidHeartRate,
              oxygenProblems,
              dialysisNeeded
            )}
            status="critical"
          />
        </Animate>
        <br />
        <Animate
          visible={!!patient}
          enter={{
            animation: "slide-up",
            duration: 500,
            delay: 100
          }}
        >
          {patient && PatientInfo(patient)}
          <Row
            style={{
              marginTop: "5%"
            }}
          >
            <Col lg={6} md={6} sm={12}>
              <OxygenLevel
                oxygenLevel={oxygenLevel}
                setOxygenLevel={this.setOxygenLevel}
                oxygenProblems={oxygenProblems}
                checkPatientStatus={this.checkPatientStatus}
              />
            </Col>
            <Col
              lg={6}
              md={6}
              sm={12}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <HeartBeat
                beatCount={beatCount}
                updateBeatCount={this.updateBeatCount}
                resetTime={resetHeartTime}
                toggleResetHeartTime={this.toggleResetHeartTime}
                checkPatientStatus={this.checkPatientStatus}
                rapidHeartRate={rapidHeartRate}
              />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col lg={12} md={12} sm={12}>
              <UrinLevel
                level={urinAmount}
                setUrinAmount={this.setUrinAmount}
              />
            </Col>
          </Row>
        </Animate>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  patients: state.patients.data,
  loading: state.patients.loading,
  error: state.patients.error,
  oxygenProblems: state.patients.oxygenProblems,
  rapidHeartRate: state.patients.rapidHeartRate,
  dialysisNeeded: state.patients.dialysisNeeded
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchPatients,
      checkStatus
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(IntesiveCare)
);
