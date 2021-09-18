import React from 'react';
import Icon from '@ant-design/icons';

import { Avatar } from './Avatar';
import { Home } from '../pages/Home';
import { Experience } from '../pages/Experience';
import { Projects } from '../pages/Projects';
import { Volunteer } from '../pages/Volunteer';

import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu } from 'antd';


import '../css/App.css';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="app">
          <Layout style={{ height: "100vh" }}>
            {this.renderSideBer()}
            {this.renderContent()}
          </Layout>
        </div>
      </Router>
    )
  }

  renderSideBer() {
    return (
      <Sider
        className="side-bar"
        width={250}
        breakpoint="lg"
        collapsedWidth="0">
        <Avatar />
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1">
            <Icon type="home" />
            <span>Home</span>
            <Link to="/" />
          </Menu.Item>

          <Menu.Item key="2">
            <Icon type="code" />
            <span>Experience</span>
            <Link to="/experience" />
          </Menu.Item>

          <Menu.Item key="3">
            <Icon type="bulb" />
            <span>Projects</span>
            <Link to="/projects" />
          </Menu.Item>

          <Menu.Item key="4">
            <Icon type="team" />
            <span>Volunteer</span>
            <Link to="/volunteer" />
          </Menu.Item>

          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="link" />
                <span>Links</span>
              </span>
            }
          >
            <Menu.Item key="5">
              <Icon type="linkedin" />
              <a href="https://linkedin.com/in/shang-yi-yu/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
            </Menu.Item>

            <Menu.Item key="6">
              <Icon type="github" />
              <a href="https://github.com/charlie6118" rel="noopener noreferrer" target="_blank">Github</a>
            </Menu.Item>

            <Menu.Item key="7">
              <Icon type="profile" />
              <a href="https://drive.google.com/file/d/1UmYUrw1AkcMi8IjvX6faZBL0jDfKGLOb/view?usp=sharing" rel="noopener noreferrer" target="_blank">Resume</a>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    )
  }

  renderContent() {
    return (
      <Layout className="content-layout">
        <Content className="page-content" style={{ margin: '16px 16px', padding: 24, background: '#fff', minHeight: "auto" }}>
          <Route exact path="/" component={Home} />
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Projects} />
          <Route path="/volunteer" component={Volunteer} />
        </Content>
      </Layout>
    )
  }
}

export default App;
