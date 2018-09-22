import React from "react";

import moment from "moment";

import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  Layer,
  Form,
  FormField,
  DateTime,
  TextInput,
  NumberInput,
  Button,
  CheckBox,
  Heading,
  Label,
  Toast
} from "grommet";

import { isEmpty, includes } from "lodash";

import { createPatientFile } from "../../actions/patient_files";
import { fetchAllergens } from "../../actions/allergens";

import { Row, Col } from "react-flexbox-grid";

class PatientFileModal extends React.Component {
  state = {
    birthDate: moment().format("YYYY-MM-DD"),
    email: "",
    firstName: "",
    lastName: "",
    height: 0,
    weight: 0,
    allergens: []
  };

  componentDidMount() {
    this.props.fetchAllergens();
  }

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onFirstNameChange = event => {
    this.setState({ firstName: event.target.value });
  };

  onLastNameChange = event => {
    this.setState({ lastName: event.target.value });
  };

  onWeightChange = event => {
    this.setState({ weight: event.target.value });
  };

  onHeightChange = event => {
    this.setState({ height: event.target.value });
  };

  onDateChange = event => {
    this.setState({ birthDate: moment(event).format("YYYY-MM-DD") });
  };

  createFile = () => {
    const {
      allergens,
      birthDate,
      email,
      firstName,
      lastName,
      weight,
      height
    } = this.state;

    this.props.createPatientFile({
      allergens,
      birthDate,
      email,
      firstName,
      lastName,
      weight,
      height
    });
    this.props.closeModal();
  };

  renderAllergens(data) {
    const { allergens } = this.state;

    return data.map((allergen, i) => {
      const handleAllergenClick = allergenId => {
        if (!includes(allergens, allergenId)) {
          this.setState({ allergens: [...allergens, allergenId] });
        } else {
          this.setState({
            allergens: allergens.filter(id => id !== allergenId)
          });
        }
      };

      return (
        <div key={i} style={{ marginBottom: 5 }}>
          <CheckBox
            label={allergen.name}
            reverse={false}
            toggle={false}
            onChange={() => handleAllergenClick(allergen.id)}
          />
        </div>
      );
    });
  }

  render() {
    const {
      birthDate,
      email,
      firstName,
      lastName,
      weight,
      height
    } = this.state;
    const { allergens, patientFileMessage, patientFileStatus } = this.props;

    return (
      <Layer
        style={{
          marginTop: 50
        }}
        closer={true}
        overlayClose={true}
        onClose={this.props.closeModal}
      >
        {patientFileStatus === "error" && (
          <Toast status="critical">{patientFileMessage}</Toast>
        )}
        <div style={{ width: 700 }}>
          <Form style={{ width: "100%" }}>
            <Row style={{ marginTop: 60 }}>
              <Col md={12}>
                <Heading>New Patient File</Heading>
              </Col>
            </Row>
            <Row
              style={{
                marginTop: 10,
                marginBottom: 10
              }}
            >
              <Col md={4}>
                <FormField label="First Name">
                  <TextInput
                    id="first-name"
                    name="first-name"
                    value={firstName}
                    onDOMChange={this.onFirstNameChange}
                  />
                </FormField>
              </Col>
              <Col md={4}>
                <FormField label="Last Name">
                  <TextInput
                    id="last-name"
                    name="last-name"
                    value={lastName}
                    onDOMChange={this.onLastNameChange}
                  />
                </FormField>
              </Col>
              <Col md={4}>
                <FormField label="Email">
                  <TextInput
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onDOMChange={this.onEmailChange}
                  />
                </FormField>
              </Col>
            </Row>
            <Row
              style={{
                marginBottom: 10
              }}
            >
              <Col md={4}>
                <FormField label="Weight (kg)">
                  <NumberInput value={weight} onChange={this.onWeightChange} />
                </FormField>
              </Col>
              <Col md={4}>
                <FormField label="Height (cm)">
                  <NumberInput value={height} onChange={this.onHeightChange} />
                </FormField>
              </Col>
              <Col md={4}>
                <FormField label="Birth Date" style={{ height: "100%" }}>
                  <DateTime
                    style={{ marginTop: "8px" }}
                    id="birth-date"
                    name="birth-date"
                    format="M/D/YYYY"
                    value={birthDate}
                    onChange={this.onDateChange}
                  />
                </FormField>
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col md={12}>
                <Label>Allergens:</Label>
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col md={12} style={{ textAlign: "left" }}>
                {!isEmpty(allergens) && this.renderAllergens(allergens)}
              </Col>
            </Row>
            <Row
              style={{
                marginBottom: 50,
                marginTop: 20,
                borderTopWidth: 1,
                borderTopStyle: "solid",
                borderTopColor: "gray"
              }}
            >
              <Col md={5} />
              <Col md={7} style={{ textAlign: "right" }}>
                <Button
                  label="Create File"
                  onClick={this.createFile}
                  style={{ marginTop: 20 }}
                />
              </Col>
            </Row>
          </Form>
        </div>
      </Layer>
    );
  }
}

const mapStateToProps = state => ({
  allergens: state.allergens.data,
  patientFileStatus: state.patient_files.data.status,
  patientFileMessage: state.patient_files.data.message
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createPatientFile,
      fetchAllergens
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PatientFileModal)
);
