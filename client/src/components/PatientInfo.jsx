import React from "react";

import moment from "moment";

import { Label } from "grommet";

import { Row, Col } from "react-flexbox-grid";

export const PatientInfo = patient => {
  return (
    <Row>
      <Col
        md={4}
        style={{
          textAlign: "left"
        }}
      >
        <Label>
          <i>Name</i>: {patient.name}
        </Label>
      </Col>
      <Col
        md={4}
        style={{
          textAlign: "left"
        }}
      >
        <Label>
          <i>Surname</i>: {patient.surname}
        </Label>
      </Col>
      <Col
        md={4}
        style={{
          textAlign: "left"
        }}
      >
        <Label>
          <i>Birth Date</i>: {moment(patient.birthDate).format("DD-MM-YYYY")}
        </Label>
      </Col>
    </Row>
  );
};
