import React from 'react'
import { BrowserRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import AppRouter from '../../router/router'
import PagesHeader from './PageHeader';
import PagesFooter from './PageFooter';
import * as LinkConstant from '../../constant/LinkConstant'

const { Content, Sider } = Layout;

export default class MyLayout extends React.Component {
  static contextTypes = { router: PropTypes.object };
  state = {
    collapsed: false,
    width: 200
  }

  changeRouter = (event) => {
    // 改变路由显示
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      width: this.state.collapsed ? 200 : 55
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <PagesHeader />
          <Layout>

            <Sider width={this.state.width} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['0']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                inlineCollapsed={this.state.collapsed}
              >
                <Menu.Item key="0" onClick={this.changeRouter}>
                  <Link to={LinkConstant.Home}>
                    <Icon type="home" />
                    <span style={{ padding: '0 0 0 12px' }}>首页 </span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="1" onClick={this.changeRouter}>
                  <Link to={LinkConstant.JobScheduler}>
                    <Icon type="play-circle" />
                    <span style={{ padding: '0 0 0 12px' }}>任务 </span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2" onClick={this.changeRouter}>
                  <Link to={LinkConstant.DataView}>
                    <Icon type="laptop" />
                    <span style={{ padding: '0 0 0 12px' }}>数据 </span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="3" onClick={this.changeRouter}>
                  <Link to={LinkConstant.History}>
                    <Icon type="bars" />
                    <span style={{ padding: '0 0 0 12px' }}>历史 </span>
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>

            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '8px 0' }}>
                <Breadcrumb.Item>
                  <Icon className="collapse" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggleCollapsed} />
                </Breadcrumb.Item>

                {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item> */}
              </Breadcrumb>
              <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                <AppRouter />
              </Content>
              <PagesFooter />
            </Layout>

          </Layout>

        </Layout>
      </BrowserRouter>
    );
  }
}