import React from "react";

import { Box, Label, Value, Meter, Heading } from "grommet";

export default class UrinLevel extends React.Component {
  state = {
    urinUp: true
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
    const { urinUp } = this.state;
    const { level } = this.props;

    if (urinUp) {
      this.props.setUrinAmount(Math.floor(Math.random() * 100) + 1);
    } else {
      this.props.setUrinAmount(-Math.floor(Math.random() * 100) + 1);
    }

    if (level >= 600) {
      this.setState({ urinUp: false });
    } else if (level < 60) {
      this.setState({ urinUp: true });
    }
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { level } = this.props;

    return (
      <div
        style={{
          width: "100%",
          textAlign: "center"
        }}
      >
        <Box>
          <Box
            direction="row"
            justify="between"
            pad={{
              between: "small"
            }}
            responsive={false}
          >
            <Label size="small">0 ml</Label>
            <Label size="small">1000 ml</Label>
          </Box>
        </Box>
        <Meter size="large" vertical={false} value={level} max={1000} min={0} colorIndex="warning" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          {" "}
          <Heading tag="h2" strong>
            Urin amount (last 12 hours):
          </Heading>
          <Heading
            strong
            style={{
              paddingLeft: "10px"
            }}
          >
            <strong>{`${level} ml`}</strong>
          </Heading>{" "}
        </div>
      </div>
    );
  }
}
