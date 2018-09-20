import React from "react";

import heart from "../../../assets/images/heart.png";
import { Label } from "grommet";
import { Pulse } from "react-motions";

const heartBeats = [1, 100];

export class HeartBeat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beatCount: 0,
      timePassed: 0
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
    let { timePassed } = this.state;

    timePassed += 1;

    if (Number.isInteger(timePassed / 10)) {
      console.log("salji");
    }
    if (timePassed <= 60) {
      this.setState({
        beatCount: this.state.beatCount + Math.floor(Math.random() * 3) + 1,
        timePassed
      });
    } else {
      this.setState({ beatCount: 0, timePassed: 0 });
    }
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { beatCount, timePassed } = this.state;

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
          <div>
            <img src={heart} width="350" height="250" alt="heart" />
          </div>
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
