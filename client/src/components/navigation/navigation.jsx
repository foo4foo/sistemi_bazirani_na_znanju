import React, {Component} from 'react';

import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Footer from 'grommet/components/Footer';
import User from 'grommet/components/icons/base/User';
import HomeIcon from 'grommet/components/icons/base/Home';
import AidIcon from 'grommet/components/icons/base/Aid';
import GrowIcon from 'grommet/components/icons/base/Grow';
import Box from 'grommet/components/Box';

import './navigation.css';

export class Navigation extends Component {
  render() {
    return (
      <Sidebar colorIndex='neutral-3' fixed={false} size='medium'>
        <Header pad='medium' justify='between'>
          <Title>
            Princeton Plainsboro
          </Title>
        </Header>
        <Box flex='grow' justify='start'>
          <Menu primary={true}>
            <Anchor icon={< HomeIcon />} href='#' className='active' label="Home"/>
            <Anchor icon={< AidIcon />} href='#' label="New Case"/>
            <Anchor icon={< GrowIcon />} href='#' label="Intesive Care"/>
          </Menu>
        </Box>
        <Footer pad='medium'>
          <Anchor icon={< User colorIndex = 'light-1' />} label='Logout'/>
        </Footer>
      </Sidebar>
    )
  }
}