import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchMedicines } from "../../actions/medicines";

import { Row, Col } from "react-flexbox-grid";
import {
  Animate,
  Distribution,
  Label,
  Button,
  Select,
  Title,
  Layer,
  Notification
} from "grommet";

import { isEqual } from "lodash";

class PossibleIllnesses extends React.Component {
  state = {
    selectedIllness: undefined,
    selectedMedicines: []
  };

  onSelectMedicine = medicine => {
    const medicineIndex = this.state.selectedMedicines.findIndex(m =>
      isEqual(m, medicine)
    );
    if (medicineIndex === -1) {
      const selectedMedicines = [...this.state.selectedMedicines, medicine];
      this.setState({ selectedMedicines });
      // send check this.props.matchIllnesses(selectedMedicines.map(m => s.value));
    } else {
      this.setState({
        selectedMedicines: this.state.selectedMedicines.filter(
          m => m.value !== medicine.value
        )
      });
    }
  };

  render() {
    const { selectedIllness, selectedMedicines } = this.state;
    const { illnesses, medicines } = this.props;

    return (
      <div>
        <Label>Illnesses most likely associated with symptoms</Label>
        <br />
        <Distribution
          series={illnesses.map(i => {
            return {
              label: i.name,
              value: parseInt(i.match, 10),
              onClick: () => {
                this.setState({ selectedIllness: i, selectedMedicines: [] });
                this.props.fetchMedicines(i.id);
              }
            };
          })}
          units="%"
          size="small"
        />
        <br />{" "}
        {!!selectedIllness && (
          <Layer
            style={{
              marginTop: 50
            }}
            closer={true}
            overlayClose={true}
            onClose={() => this.setState({ selectedIllness: undefined })}
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
                  <Notification
                    message="Patient allergens: lactose"
                    status="critical"
                    closer
                  />
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
                    onClick={() => console.log("submit")}
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

const mapStateToProps = state => ({ medicines: state.medicines.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchMedicines
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PossibleIllnesses);
