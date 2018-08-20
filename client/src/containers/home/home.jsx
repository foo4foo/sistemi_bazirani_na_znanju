import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import BookIcon from "grommet/components/icons/base/Book";
import AedIcon from "grommet/components/icons/base/Aed";
import InfoIcon from "grommet/components/icons/base/Info";
import NodesIcon from "grommet/components/icons/base/Nodes";
import { Header, Box, Menu, Anchor, Search } from "grommet";

import Illnesses from "../../components/illnesses/illnesses";
import Symptoms from "../../components/symptoms/symptoms";

import { searchIllnesses } from "../../actions/illnesses";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pattern: "",
      filter: "illnesses",
      currentPage: 1
    };
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
  }

  handleTextInput = event => {
    const { currentPage, filter } = this.state;
    this.setState({ pattern: event.target.value });
    if (filter === "illnesses") {
      this.props.searchIllnesses({
        name: event.target.value,
        page: currentPage
      });
    }
  };

  changeFilter = filter => {
    this.setState({ pattern: "", filter });
  };

  render() {
    const { filter, pattern } = this.state;
    const { illnesses, symptoms } = this.props;

    return (
      <div className="patients-container">
        <Header splash={false} size="small" float={false} fixed={false}>
          <InfoIcon />
          <Box flex={true} justify="end" direction="row" responsive={false}>
            <Search
              onDOMChange={this.handleTextInput}
              value={pattern}
              inline={true}
              fill={true}
              size="medium"
              placeHolder="Search"
              dropAlign={{
                right: "right"
              }}
            />
            <Menu
              icon={<BookIcon />}
              dropAlign={{
                right: "right"
              }}
            >
              <Anchor
                onClick={() => this.changeFilter("illnesses")}
                icon={<AedIcon />}
                className="active"
              >
                Illnesses
              </Anchor>
              <Anchor
                onClick={() => this.changeFilter("symptoms")}
                icon={<NodesIcon />}
              >
                Symptoms
              </Anchor>
            </Menu>
          </Box>
        </Header>
        {filter === "illnesses" ? <Illnesses data={illnesses} /> : <Symptoms />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  illnesses: state.illnesses.data,
  page: state.illnesses.page
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchIllnesses
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
