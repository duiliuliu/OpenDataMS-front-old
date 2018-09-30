import React from 'react'
import { Layout, Menu, Icon, Button } from 'antd';

const { Header, Content, Sider } = Layout;

const SubMenu = Menu.SubMenu;

export default class SlideBar extends React.Component {
  state = {
    collapsed: false,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <div style={{ width: 156 }}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            inlineCollapsed={this.state.collapsed}
          >
            <Menu.Item key="1">
              <Icon type="home" />
              <span>Home </span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="laptop" />
              <span>任务 </span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="bars" />
              <span>历史 </span>
            </Menu.Item>
          </Menu>
        </Sider>
      </div>
    );
  }
}