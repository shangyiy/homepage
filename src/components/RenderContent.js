import React from 'react';
import '../css/RenderContent.css';
import { Avatar } from './Avatar';
import { Home } from '../pages/Home';
import { Experience } from '../pages/Experience';
import { Projects } from '../pages/Projects';
import { Volunteer } from '../pages/Volunteer';
 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;
export class RenderContent extends React.Component {

    render () {
        return (
            <Router>
                <Layout>
                    <Sider 
                        width={250}
                        style={{ 
                            height: '100vh',
                            position: "fixed",
                            left: 0,
                            top: 0,
                        }}
                    >
                        <Avatar />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <Icon type="home" />
                                <span>Home</span>
                                <Link to="/" />
                            </Menu.Item>

                            <Menu.Item key="2">
                                <Icon type="project" />
                                <span>Projects</span>
                                <Link to="/projects" />
                            </Menu.Item>

                            <Menu.Item key="3">
                                <Icon type="code" />
                                <span>Experience</span>
                                <Link to="/experience" />
                            </Menu.Item>

                            <Menu.Item key="4">
                                <Icon type="heart" />
                                <span>Volunteer</span>
                                <Link to="/volunteer" />
                            </Menu.Item>

                            <SubMenu
                            key="sub1"
                            title={
                                <span>
                                <Icon type="user" />
                                <span>Links</span>
                                </span>
                            }
                            >
                            <Menu.Item key="5">
                                <Icon type="linkedin" />
                                <span>LinkedIn</span>
                                <a href="https://linkedin.com/in/shang-yi-yu/">Content</a>
                            </Menu.Item>

                            <Menu.Item key="6">
                                <Icon type="profile" />
                                <span>Resume</span>
                                <a href="/" target='_blank'>Content</a>
                            </Menu.Item>

                            </SubMenu>
                        </Menu>
                    </Sider>

                    <Layout style={{ marginLeft: 250, top: 0}}>
                        <Content style={{ margin: '16px 16px', padding: 24, background: '#fff', minHeight: 700 }}>
                            <Route exact path="/" component={Home} />
                            <Route path="/experience" component={Experience} />
                            <Route path="/projects" component={Projects} />
                            <Route path="/volunteer" component={Volunteer} />
                        </Content>
                    </Layout>

                </Layout>
            </Router>
        )
    }
}