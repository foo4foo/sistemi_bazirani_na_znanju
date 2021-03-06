import React, { Component } from "react";

import Sidebar from "grommet/components/Sidebar";
import Header from "grommet/components/Header";
import Title from "grommet/components/Title";
import Menu from "grommet/components/Menu";
import Anchor from "grommet/components/Anchor";
import Footer from "grommet/components/Footer";
import User from "grommet/components/icons/base/User";
import HomeIcon from "grommet/components/icons/base/Home";
import AidIcon from "grommet/components/icons/base/Aid";
import GroupIcon from "grommet/components/icons/base/Group";
import GrowIcon from "grommet/components/icons/base/Grow";
import Box from "grommet/components/Box";

import "./navigation.css";

export class Navigation extends Component {
  getCurrentRoute = () => {
    return window.location.pathname;
  };

  logout = () => {
    localStorage.removeItem("jwt");
    window.location.replace("/");
  };

  render() {
    return (
      <Sidebar
        colorIndex="neutral-3"
        fixed={false}
        size="medium"
        style={{
          width: "100%"
        }}
      >
        <Header pad="medium" justify="between">
          <Title>Vivacious Giddy</Title>
        </Header>
        <Box flex="grow" justify="start">
          <Menu primary={true}>
            <Anchor
              icon={<HomeIcon />}
              href="/"
              className={this.getCurrentRoute() === "/" ? "active" : ""}
              label="Home"
            />
            <Anchor
              icon={<GroupIcon />}
              href="/patients"
              className={this.getCurrentRoute() === "/patients" ? "active" : ""}
              label="Patients"
            />
            <Anchor
              icon={<AidIcon />}
              href="/new_case"
              className={this.getCurrentRoute() === "/new_case" ? "active" : ""}
              label="New Case"
            />
            <Anchor
              icon={<GrowIcon />}
              href="/intesive_care"
              className={
                this.getCurrentRoute() === "/intesive_care" ? "active" : ""
              }
              label="Intesive Care"
            />
          </Menu>
        </Box>
        <Footer pad="medium">
          <Anchor
            icon={<User colorIndex="light-1" />}
            label="Logout"
            onClick={this.logout}
          />
        </Footer>
      </Sidebar>
    );
  }
}
