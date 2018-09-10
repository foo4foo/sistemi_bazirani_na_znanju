import React from "react";

import NodesIcon from "grommet/components/icons/base/Nodes";

import {
  Header,
  Box,
  Search,
  Button,
  TextInput,
  FormField,
  Distribution,
  Label
} from "grommet";

import PatientFileModal from "../../components/patient_file_modal/PatientFileModal";

import { Row, Col } from "react-flexbox-grid";

import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "./NewCase.css";

class NewCase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newFileModalOpened: false
    };
  }

  onSelectSymptom(selected) {
    console.log(selected.suggestion);
  }

  onTextChange(event) {
    console.log(event.target.value);
  }

  onFileIdChange(event) {
    console.log(event.target.value);
    // find file with this id
  }

  toggleModal = () => {
    const { newFileModalOpened } = this.state;

    this.setState({
      newFileModalOpened: !newFileModalOpened
    });
  };

  render() {
    const { newFileModalOpened } = this.state;

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
              suggestions={[
                {
                  label: "Cough",
                  id: 2
                },
                {
                  label: "Leaky Nose",
                  id: 1
                }
              ]}
            />
          </Box>
        </Header>
        <div className="file-btn-container">
          <Button label="New File" onClick={this.toggleModal} />
        </div>
        <Row className="form-row-container">
          <Col md={4} />
          <Col md={6} />
          <Col md={2}>
            {newFileModalOpened && (
              <PatientFileModal closeModal={this.toggleModal} />
            )}
            <FormField label="File ID">
              <TextInput
                id="item1"
                name="item-1"
                value="3631"
                onDOMChange={this.onFileIdChange}
              />
            </FormField>
          </Col>
        </Row>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewCase)
);
