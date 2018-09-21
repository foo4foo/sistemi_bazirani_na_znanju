import React from "react";

import heart from "../../../assets/images/heart.png";
import { Label } from "grommet";
import { Pulse, Tada } from "react-motions";

import "./heart_beat.css";

export class HeartBeat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heartRate: 2,
      timePassed: 0,
      heartSpeed: 1
    };
  }

  componentDidMount() {
    this.interval = this.beatInterval();
  }

  beatInterval = () => {
    return setInterval(() => {
      this.updateBeat();
    }, 1000);
  };

  updateBeat = () => {
    let { timePassed, heartRate } = this.state;

    timePassed += 1;

    if (Number.isInteger(timePassed / 10)) {
      const { beatCount } = this.props;
      // this.props.updatePatientState(currentState);
    }
    if (timePassed <= 60) {
      const heartSpeed = Math.floor(Math.random() * heartRate) + 1;
      this.props.updateBeatCount(heartSpeed);
      this.setState({ timePassed, heartSpeed });
    } else {
      this.props.updateBeatCount(0);
      this.setState({ timePassed: 0, heartSpeed: 1 });
    }
  };

  toggleHeartRate = () => {
    const { heartRate } = this.state;

    if (heartRate === 2) {
      this.setState({ heartRate: 4 });
    } else {
      this.setState({ heartRate: 2 });
    }
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { timePassed, heartRate } = this.state;
    const { beatCount } = this.props;

    return (
      <div>
        <div
          style={{
            paddingBottom: "20px",
            textAlign: "center"
          }}
        >
          <Label>Heart beats ({`${timePassed} seconds passed`})</Label>
        </div>
        <Pulse duration={1} infinite>
          {heartRate > 2 ? (
            <Tada duration={1} infinite>
              <div
                className="heart"
                onClick={this.toggleHeartRate}
                style={{
                  cursor: "pointer"
                }}
              >
                <img src={heart} width="350" height="250" alt="heart" />
              </div>
            </Tada>
          ) : (
            <div
              className="heart"
              onClick={this.toggleHeartRate}
              style={{
                cursor: "pointer"
              }}
            >
              <img src={heart} width="350" height="250" alt="heart" />
            </div>
          )}
        </Pulse>
        <div
          style={{
            paddingTop: "20px",
            textAlign: "center"
          }}
        >
          <Label>
            <h2>
              <b>{` ${beatCount}♥`}</b>
            </h2>
          </Label>
        </div>
      </div>
    );
  }
}
