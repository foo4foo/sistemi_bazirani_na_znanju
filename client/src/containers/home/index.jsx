import React, {Component} from 'react';
import {Timeline} from 'react-twitter-widgets';

import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {Row, Col} from 'react-flexbox-grid';
import {Navigation} from '../../components/navigation/navigation';

import './index.css';

class Index extends Component {

  componentWillReceiveProps() {
    const {user} = this.props;
    console.log(user);
  }

  render() {
    return (
      <Row>
        <Navigation/>
        <Row className="home-container">
          <Col md={3} className="twitter-container">
            <Timeline
              dataSource={{
              sourceType: 'profile',
              screenName: 'cancer'
            }}
              options={{
              username: 'TwitterDev'
            }}
              onLoad={() => console.log('Timeline is loaded!')}/>
          </Col>
          <Col md={9}>
            <div></div>
          </Col>
        </Row>
      </Row>
    )
  }
}

const mapStateToProps = state => ({user: state.users.user});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index))
