import React from "react";

import { Box, Meter, Value, Heading } from "grommet";

export class OxygenLevel extends React.Component {
  state = {
    oxygenUp: true
  };

  componentDidMount() {
    this.interval = this.updateLevelInterval();
  }

  updateLevelInterval = () => {
    return setInterval(() => {
      this.updateLevel();
    }, 2000);
  };

  updateLevel = () => {
    const { oxygenUp } = this.state;
    const { oxygenLevel } = this.props;

    if (oxygenUp) {
      this.props.setOxygenLevel(Math.floor(Math.random() * 10) + 1);
    } else {
      this.props.setOxygenLevel(-Math.floor(Math.random() * 10) + 1);
    }

    if (oxygenLevel >= 95) {
      this.setState({ oxygenUp: false });
    } else if (oxygenLevel < 40) {
      this.setState({ oxygenUp: true });
    }
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { oxygenLevel, oxygenProblems } = this.props;

    return (
      <div>
        <div
          style={{
            textAlign: "center"
          }}
        >
          <Heading>
            <strong>Oxygen Level</strong>
          </Heading>
        </div>
        <Box responsive={false} align="center">
          <Meter
            colorIndex={oxygenProblems ? "grey-1 " : "neutral-1"}
            type="arc"
            size="medium"
            vertical={false}
            value={oxygenLevel}
          />
          <Value value={oxygenLevel} units="mm Hg" size="medium" />
        </Box>
      </div>
    );
  }
}
