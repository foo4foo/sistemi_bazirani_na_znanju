import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {Timeline} from 'react-twitter-widgets';
import {Row, Col} from 'react-flexbox-grid';
import { Navigation } from './components/navigation/navigation';

/** Private route .*/
const PrivateRoute = ({ component: Component, ...rest }: { component: Component }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('jwt') ?
    <Row>
      <Navigation />
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
          <Component {...props} />
        </Col>
      </Row>
    </Row>
    :
      <Redirect to='/login' />
  )} />
);

export default PrivateRoute;
