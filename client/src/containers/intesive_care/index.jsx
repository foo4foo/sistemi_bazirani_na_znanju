import React from "react";

import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import AccessibleIcon from "grommet/components/icons/base/Accessible";

import { Header, Box, Search, Animate } from "grommet";
import { Row, Col } from "react-flexbox-grid";
import { OxygenLevel } from "../../components/patient_stats/oxygen_level";
import { HeartBeat } from "../../components/patient_stats/heart_beat";

class IntesiveCare extends React.Component {
  state = {
    pattern: "",
    beatCount: 0,
    oxygenLevel: 80
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

  render() {
    const { pattern, beatCount, oxygenLevel } = this.state;

    return (
      <div>
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
              dropAlign={{
                right: "right"
              }}
            />
          </Box>
        </Header>
        <Animate
          enter={{
            animation: "slide-up",
            duration: 500,
            delay: 100
          }}
        >
          <Row
            style={{
              marginTop: "5%"
            }}
          >
            <Col lg={6} md={6} sm={12}>
              <OxygenLevel
                oxygenLevel={oxygenLevel}
                setOxygenLevel={this.setOxygenLevel}
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
              />
            </Col>
          </Row>
        </Animate>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(IntesiveCare)
);
