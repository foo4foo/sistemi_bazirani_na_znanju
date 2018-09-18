import React from "react";
import { withRouter } from "react-router-dom";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchMedicines } from "../../actions/medicines";
import { createDiagnosis } from "../../actions/diagnoses";
import { refreshAllergensStore } from "../../actions/allergens";

import { Row, Col } from "react-flexbox-grid";

import {
  Animate,
  Distribution,
  Label,
  Button,
  Select,
  Title,
  Toast,
  Layer,
  Notification
} from "grommet";

import { isEqual, isEmpty } from "lodash";

class PossibleIllnesses extends React.Component {
  state = {
    selectedIllness: undefined,
    showForm: false,
    selectedMedicines: []
  };

  componentWillReceiveProps(newProps) {
    const { diagnosis } = newProps;

    if (!!diagnosis.id) {
      this.setState({ showForm: false });

      setTimeout(() => {
        window.location.replace("/new_case");
      }, 1000);
    }
  }

  onSelectMedicine = medicine => {
    const medicineIndex = this.state.selectedMedicines.findIndex(m =>
      isEqual(m, medicine)
    );
    if (medicineIndex === -1) {
      const selectedMedicines = [...this.state.selectedMedicines, medicine];
      this.setState({ selectedMedicines });
    } else {
      this.setState({
        selectedMedicines: this.state.selectedMedicines.filter(
          m => m.value !== medicine.value
        )
      });
    }
  };

  submitDiagnosis = () => {
    const { selectedMedicines, selectedIllness } = this.state;
    const { patientFile, symptoms } = this.props;

    this.props.createDiagnosis({
      medicines: selectedMedicines.map(m => m.value),
      symptoms: symptoms.map(s => s.id),
      illnesses: Array(1).fill(selectedIllness.id),
      patientId: patientFile.patient.id,
      patientFileId: patientFile.id
    });
  };

  render() {
    const { selectedIllness, selectedMedicines, showForm } = this.state;
    const { diagnosis, illnesses, medicines, allergenMedicines } = this.props;

    return (
      <div>
        {!!diagnosis.id && (
          <Toast status="ok">Diagnosis successfuly created</Toast>
        )}
        <Label>Illnesses most likely associated with symptoms</Label>
        <br />
        <Distribution
          series={illnesses.map(i => {
            return {
              label: i.name,
              value: parseInt(i.match, 10),
              onClick: () => {
                this.props.refreshAllergensStore();
                this.setState({
                  selectedIllness: i,
                  selectedMedicines: [],
                  showForm: true
                });
                this.props.fetchMedicines(i.id);
              }
            };
          })}
          units="VC"
          size="small"
        />
        <br />{" "}
        {showForm && (
          <Layer
            style={{
              marginTop: 50
            }}
            closer={true}
            overlayClose={true}
            onClose={() =>
              this.setState({ selectedIllness: undefined, showForm: false })
            }
          >
            <Animate
              style={{
                width: window.innerWidth / 2.5
              }}
              visible={!!selectedIllness}
              enter={{
                animation: "slide-right",
                duration: 500,
                delay: 100
              }}
            >
              <Row
                style={{
                  alignItems: "center",
                  marginTop: "50px"
                }}
              >
                <Col md={12}>
                  {!isEmpty(allergenMedicines) && (
                    <Notification
                      message={`Patient allergens: ${allergenMedicines
                        .map(m => m.name)
                        .join(", ")}`}
                      status="critical"
                      closer
                    />
                  )}
                </Col>
              </Row>
              {!!selectedIllness && (
                <Row
                  style={{
                    alignItems: "center",
                    marginTop: "50px"
                  }}
                >
                  <Col md={8}>
                    <Title>{selectedIllness.name}</Title>
                  </Col>
                  <Col
                    md={4}
                    style={{
                      textAlign: "right"
                    }}
                  >
                    <Select
                      placeHolder="Medicines"
                      multiple={true}
                      options={medicines.map(m => {
                        return { label: m.name, value: m.id };
                      })}
                      value={selectedMedicines}
                      onChange={e => this.onSelectMedicine(e.option)}
                    />
                  </Col>
                </Row>
              )}
              <br />
              <Row>
                <Col md={12}>
                  <div
                    style={{
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "row",
                      width: "100%"
                    }}
                  >
                    {selectedMedicines.map((medicine, i) => {
                      return (
                        <div
                          key={i}
                          style={{
                            backgroundColor: "white",
                            marginRight: 10,
                            borderRadius: "20px",
                            borderColor: "#DA0077",
                            borderStyle: "solid",
                            borderWidth: "1px"
                          }}
                        >
                          <span
                            style={{
                              color: "#DA0077",
                              margin: "15px"
                            }}
                          >
                            {medicine.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </Col>
              </Row>
              <br />
              <hr />
              <Row>
                <Col md={8} />
                <Col
                  md={4}
                  style={{
                    textAlign: "right"
                  }}
                >
                  <Button
                    label="Make Diagnosis"
                    plain={false}
                    onClick={this.submitDiagnosis}
                  />
                </Col>
              </Row>
              <br />
            </Animate>
          </Layer>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  medicines: state.medicines.data,
  allergenMedicines: state.diagnoses.allergenMedicines,
  diagnosis: state.diagnoses.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchMedicines,
      createDiagnosis,
      refreshAllergensStore
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PossibleIllnesses)
);
