import React, { Component } from "react";

import { Accordion, AccordionPanel, Paragraph } from "grommet";
import AedIcon from "grommet/components/icons/base/Aed";

import "./illnesses.css";

export default class Illnesses extends Component {
  renderIllness = illness => {
    return (
      <div className="illness">
        <AedIcon />
        <p className="illness-name">{illness.name}</p>{" "}
      </div>
    );
  };

  render() {
    const { data } = this.props;

    if (!data) {
      return null;
    }

    return (
      <div className="illnesses">
        <Accordion>
          {data.map((illness, i) => {
            return (
              <AccordionPanel key={i} heading={this.renderIllness(illness)}>
                <Paragraph>Symptoms:</Paragraph>
                <div className="illness-symptoms">
                  {illness.symptoms.map((symptom, si) => {
                    return <Paragraph>{` - ${symptom.name}`}</Paragraph>;
                  })}
                </div>
              </AccordionPanel>
            );
          })}
        </Accordion>
      </div>
    );
  }
}
