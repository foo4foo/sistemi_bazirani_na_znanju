import React from "react";

import NodesIcon from "grommet/components/icons/base/Nodes";
import CloseIcon from "grommet/components/icons/base/Close";

import { isEmpty, isEqual } from "lodash";
import moment from "moment";

import {
  Header,
  Box,
  Search,
  Button,
  TextInput,
  Label,
  Toast,
  List,
  ListItem
} from "grommet";

import PatientFileModal from "../../components/patient_file_modal/PatientFileModal";
import PossibleIllnesses from "../../components/possible_illnesses";
import { Row, Col } from "react-flexbox-grid";

import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { matchIllnesses } from "../../actions/illnesses";
import { searchPatientFiles } from "../../actions/patient_files";
import { searchSymptoms } from "../../actions/symptoms";

import "./NewCase.css";

class NewCase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newFileModalOpened: false,
      symptomsSelected: [],
      showDiagnosisForm: false
    };
  }

  onSelectSymptom = selected => {
    const { patientFile } = this.props;

    if (!!patientFile.patient) {
      if (
        !this.state.symptomsSelected.find(s => isEqual(s, selected.suggestion))
      ) {
        const symptomsSelected = [
          ...this.state.symptomsSelected,
          selected.suggestion
        ];
        this.setState({ symptomsSelected });
        // send check
        this.props.matchIllnesses(symptomsSelected.map(s => s.id));
      }
    }
  };

  onTextChange = event => {
    this.props.searchSymptoms({ name: event.target.value });
  };

  onFileIdChange = event => {
    this.setState({ symptomsSelected: [] });
    const patientFileId = event.target.value;
    this.props.searchPatientFiles(patientFileId);
  };

  showDiagnosisForm = () => {
    this.setState({ showDiagnosisForm: true });
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
                this.setState(
                  {
                    symptomsSelected: symptomsSelected.filter(
                      s => !isEqual(symptom, s)
                    )
                  },
                  () =>
                    this.props.matchIllnesses(
                      this.state.symptomsSelected.map(s => s.id)
                    )
                )
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

  renderPatientInfo = patient => {
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

  renderSymptomSuggestions = symptoms => {
    if (symptoms) {
      return symptoms.map(symptom => {
        return { label: symptom.name, id: symptom.id };
      });
    }
  };

  render() {
    const { newFileModalOpened, symptomsSelected } = this.state;
    const { patientFile, symptoms, createdMessage, illnesses } = this.props;

    return (
      <div
        style={{
          height: "100vh",
          overflowY: "auto"
        }}
      >
        {createdMessage === "Patient file created" && (
          <Toast status="ok">Patient file successfuly created</Toast>
        )}
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
          <Col md={10}>
            {!patientFile.patient && (
              <Button label="New File" onClick={this.toggleModal} />
            )}
            {patientFile.patient && this.renderPatientInfo(patientFile.patient)}
          </Col>
          <Col md={2}>
            {newFileModalOpened &&
              !patientFile.patient && (
                <PatientFileModal closeModal={this.toggleModal} />
              )}
            <TextInput
              style={{
                width: "100%"
              }}
              placeHolder="File ID"
              id="item1"
              name="item-1"
              onDOMChange={this.onFileIdChange}
            />
          </Col>
        </Row>
        <br />{" "}
        {patientFile.patient && (
          <Row>
            <Col md={12}>
              <List>{this.renderSelectedSymptoms(symptomsSelected)}</List>
            </Col>
          </Row>
        )}
        <br />{" "}
        {!isEmpty(symptomsSelected) && (
          <PossibleIllnesses
            illnesses={illnesses}
            symptoms={symptomsSelected}
            patientFile={patientFile}
            showForm={this.showDiagnosisForm}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  patientFile: state.patient_files.data,
  createdMessage: state.patient_files.message,
  symptoms: state.symptoms.data,
  illnesses: state.illnesses.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchSymptoms,
      searchPatientFiles,
      matchIllnesses
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewCase)
);
