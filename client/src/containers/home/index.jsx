import React, {Component} from 'react';
import {Timeline} from 'react-twitter-widgets';

import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {Row, Col} from 'react-flexbox-grid';
import {Navigation} from '../../components/navigation/navigation';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Search from 'grommet/components/Search';

import GroupIcon from 'grommet/components/icons/base/Group';
import UserIcon from 'grommet/components/icons/base/User';
import TestIcon from 'grommet/components/icons/base/Test';
import TriggerIcon from 'grommet/components/icons/base/Trigger';
import AedIcon from 'grommet/components/icons/base/Aed';

import './index.css';
import {Paragraph} from 'grommet';

class Index extends Component {

  componentWillReceiveProps() {}

  render() {
    return (
      <Row>
        <Navigation/>
        <Row className="home-container">
          <Col md={3} className="twitter-container">
            <Timeline
              dataSource={{
              sourceType: 'profile',
              screenName: 'health'
            }}
              options={{
              username: 'TwitterDev'
            }}
              onLoad={() => console.log('Timeline is loaded!')}/>
          </Col>
          <Col md={9}>
            <Header splash={false} size='small' float={false} fixed={false}>
              <GroupIcon/>
              <Box flex={true} justify='end' direction='row' responsive={false}>
                <Search
                  inline={true}
                  fill={true}
                  size='medium'
                  placeHolder='Search patients ...'
                  dropAlign={{
                  "right": "right"
                }}/>
              </Box>
            </Header>
            <div className="patients">
              <div className="patient">
                <Row>
                  <Col md={2} className="patient-side-col">
                    <div>
                      <TestIcon size="large" colorIndex="ok"/>
                      <br/>
                      <span>Addiction issues</span>
                    </div>
                  </Col>
                  <Col md={7} className="patient-center-col">
                    <div>
                      <Title>Pera Peric - 18.10.1967.</Title>
                      <Paragraph>Short medical history ...</Paragraph>
                    </div>
                  </Col>
                  <Col md={3} className="patient-side-col diagnosis-date-holder">
                    <div>
                      <p>Last diagnosis:</p>
                      <p>17.06.2018.</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="patient">
                <Row>
                  <Col md={2} className="patient-side-col">
                    <div>
                      <AedIcon size="large" colorIndex="accent-2"/>
                      <br/>
                      <span>Immunity Issues</span>
                    </div>
                  </Col>
                  <Col md={7} className="patient-center-col">
                    <div>
                      <Title>Pera Peric - 18.10.1967.</Title>
                      <Paragraph>Short medical history ...</Paragraph>
                    </div>
                  </Col>
                  <Col md={3} className="patient-side-col diagnosis-date-holder">
                    <div>
                      <p>Last diagnosis:</p>
                      <p>17.06.2018.</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="patient">
                <Row>
                  <Col md={2} className="patient-side-col">
                    <div>
                      <TriggerIcon size="large" colorIndex="critical"/>
                      <br/>
                      <span>Chronical issues</span>
                    </div>
                  </Col>
                  <Col md={7} className="patient-center-col">
                    <div>
                      <Title>Pera Peric - 18.10.1967.</Title>
                      <Paragraph>Short medical history ...</Paragraph>
                    </div>
                  </Col>
                  <Col md={3} className="patient-side-col diagnosis-date-holder">
                    <div>
                      <p>Last diagnosis:</p>
                      <p>17.06.2018.</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Row>
    )
  }
}

const mapStateToProps = state => ({user: state.users.user});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index))
