import React, { Component } from "react";

import { Accordion, AccordionPanel, Paragraph } from "grommet";
import NodesIcon from "grommet/components/icons/base/Nodes";

import "./symptoms.css";

export default class Symptoms extends Component {
  renderSymptom = symptom => {
    return (
      <div className="symptom">
        <NodesIcon colorIndex="ok" />
        <p className="symptom-name">{symptom.name}</p>{" "}
      </div>
    );
  };

  render() {
    const { data } = this.props;

    if (!data) {
      return null;
    }

    return (
      <div className="symptoms">
        <Accordion>
          {data.map((symptom, i) => {
            return (
              <AccordionPanel
                key={i}
                heading={this.renderSymptom(symptom)}
                style={{
                  height: "100%",
                  overflow: "auto"
                }}
              >
                <Paragraph>Illnesses:</Paragraph>
                <div className="symptom-illnesses">
                  {symptom.illnesses.map((illness, si) => {
                    return (
                      <Paragraph key={si}>{` - ${illness.name}`}</Paragraph>
                    );
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
