import React from "react";

import NodesIcon from "grommet/components/icons/base/Nodes";
import CloseIcon from "grommet/components/icons/base/Close";

import { isEmpty, isEqual, find } from "lodash";

import {
  Header,
  Box,
  Search,
  Button,
  TextInput,
  FormField,
  Distribution,
  Label,
  Toast,
  List,
  ListItem
} from "grommet";

import PatientFileModal from "../../components/patient_file_modal/PatientFileModal";

import { Row, Col } from "react-flexbox-grid";

import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { searchSymptoms } from "../../actions/symptoms";

import "./NewCase.css";

class NewCase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newFileModalOpened: false,
      symptomsSelected: []
    };
  }

  onSelectSymptom = selected => {
    if (
      !this.state.symptomsSelected.find(s => isEqual(s, selected.suggestion))
    ) {
      this.setState({
        symptomsSelected: [...this.state.symptomsSelected, selected.suggestion]
      });
    }
  };

  onTextChange = event => {
    this.props.searchSymptoms({ name: event.target.value });
  };

  onFileIdChange = event => {
    console.log(event.target.value);
    // find file with this id
  };

  toggleModal = () => {
    const { newFileModalOpened } = this.state;

    this.setState({
      newFileModalOpened: !newFileModalOpened
    });
  };

  renderSelectedSymptoms = symptomsSelected => {
    return symptomsSelected.map((symptom, id) => {
      return (
        <ListItem key={id} justify="between" separator="horizontal">
          <span>{symptom.label}</span>
          <span className="secondary">
            <CloseIcon
              onClick={() =>
                this.setState({
                  symptomsSelected: symptomsSelected.filter(
                    s => !isEqual(symptom, s)
                  )
                })
              }
              colorIndex="critical"
              style={{
                cursor: "pointer"
              }}
            />
          </span>
        </ListItem>
      );
    });
  };

  renderSymptomSuggestions = symptoms => {
    if (symptoms) {
      return symptoms.map(symptom => {
        return { label: symptom.name, id: symptom.id };
      });
    }
  };

  render() {
    const { newFileModalOpened, symptomsSelected } = this.state;
    const { patientFile, symptoms } = this.props;

    return (
      <div>
        <Header splash={false} size="small" float={false} fixed={false}>
          <NodesIcon colorIndex="ok" />
          <Box flex={true} justify="end" direction="row" responsive={false}>
            <Search
              onDOMChange={this.onTextChange}
              inline={true}
              fill={true}
              size="medium"
              placeHolder="Search"
              onSelect={this.onSelectSymptom}
              suggestions={this.renderSymptomSuggestions(symptoms)}
            />
          </Box>
        </Header>
        <Row className="form-row-container">
          {patientFile.patient && (
            <Toast status="ok">Patient file successfuly created</Toast>
          )}
          <Col md={4}>
            {!patientFile.patient && (
              <Button label="New File" onClick={this.toggleModal} />
            )}
          </Col>
          <Col md={6} />
          <Col md={2}>
            {newFileModalOpened &&
              !patientFile.patient && (
                <PatientFileModal closeModal={this.toggleModal} />
              )}
            <TextInput
              style={{
                marginRight: "10px"
              }}
              placeHolder="File ID"
              id="item1"
              name="item-1"
              onDOMChange={this.onFileIdChange}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={12}>
            <List>{this.renderSelectedSymptoms(symptomsSelected)}</List>
          </Col>
        </Row>
        <br />{" "}
        {!isEmpty(symptomsSelected) && (
          <div className="illnesses-container">
            <Label>Illnesses most likely associated with symptoms</Label>
            <br />
            <Distribution
              series={[
                {
                  label: "Fever",
                  value: 40
                },
                {
                  label: "Cold",
                  value: 30
                },
                {
                  label: "Kindies",
                  value: 20
                },
                {
                  label: "Heart Issue",
                  value: 10
                }
              ]}
              units="%"
              size="small"
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  patientFile: state.patient_files.data,
  symptoms: state.symptoms.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchSymptoms
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewCase)
);
