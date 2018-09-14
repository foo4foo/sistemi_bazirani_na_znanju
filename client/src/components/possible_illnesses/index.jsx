import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import FormCloseIcon from "grommet/components/icons/base/FormClose";

import { Row, Col } from "react-flexbox-grid";
import { Animate, Distribution, Label, Button, Select, Title } from "grommet";

import { isEqual, isEmpty } from "lodash";

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
    const { illnesses } = this.props;

    return (
      <div className="illnesses-container">
        <Label>Illnesses most likely associated with symptoms</Label>
        <br />
        <Distribution
          series={illnesses.map(i => {
            return {
              label: i.name,
              value: parseInt(i.match, 10),
              onClick: () => this.setState({ selectedIllness: i })
            };
          })}
          units="%"
          size="small"
        />
        <br />
        <Animate
          visible={!!selectedIllness}
          enter={{
            animation: "slide-up",
            duration: 300,
            delay: 0
          }}
        >
          <hr />{" "}
          {!!selectedIllness && (
            <Row
              style={{
                alignItems: "center"
              }}
            >
              <Col md={4}>
                <Title>{selectedIllness.name}</Title>
              </Col>
              <Col md={4}>
                <Select
                  placeHolder="Medicines"
                  multiple={true}
                  options={[
                    {
                      label: "one",
                      value: 1
                    },
                    {
                      label: "two",
                      value: 2
                    },
                    {
                      label: "three",
                      value: 3
                    },
                    {
                      label: "four",
                      value: 4
                    },
                    {
                      label: "five",
                      value: 5
                    }
                  ]}
                  value={selectedMedicines}
                  onChange={e => this.onSelectMedicine(e.option)}
                />
              </Col>
              <Col
                md={4}
                style={{
                  textAlign: "right"
                }}
              >
                <Button
                  label="Make Diagnosis"
                  plain={false}
                  primary
                  onClick={() => console.log("submit")}
                />
              </Col>
            </Row>
          )}
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
                <div
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
                    Brufen
                  </span>
                </div>
                <div
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
                    Brufen
                  </span>
                </div>
              </div>
            </Col>
          </Row>
          <br />
          <hr />
        </Animate>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PossibleIllnesses);
