import React from "react";
import { Layout, Menu, Icon } from "antd";
import * as LinkConstant from "../../constant/LinkConstant";
import { Link } from "react-router-dom";

const SubMenu = Menu.SubMenu;
const { Sider } = Layout;

export default class SliderBat extends React.Component {
  render() {
    return (
      <Sider width={this.props.width} style={{ background: "#fff" }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[LinkConstant.Home]}
          style={{ height: "100%", borderRight: 0 }}
          inlineCollapsed={this.props.collapsed}
        >
          <Menu.Item key={LinkConstant.Home}>
            <Link to={LinkConstant.Home}>
              <Icon type="home" />
              <span style={{ padding: "0 0 0 12px" }}>首页 </span>
            </Link>
          </Menu.Item>

          <SubMenu
            key={LinkConstant.JobScheduler}
            title={
              <span>
                <Icon type="play-circle" />
                <span style={{ padding: "0 0 0 12px" }}>任务 </span>
              </span>
            }
          >
            <Menu.Item key={LinkConstant.NewJobScheduler}>
              <Link to={LinkConstant.NewJobScheduler}>
                <span style={{ padding: "0 0 0 12px" }}>新建任务 </span>
              </Link>
            </Menu.Item>
            <Menu.Item key={LinkConstant.CurrentJobScheduler}>
              <Link to={LinkConstant.CurrentJobScheduler}>
                <span style={{ padding: "0 0 0 12px" }}>当前任务 </span>
              </Link>
            </Menu.Item>
            <Menu.Item key={LinkConstant.HistoryJobScheduler}>
              <Link to={LinkConstant.HistoryJobScheduler}>
                <span style={{ padding: "0 0 0 12px" }}>历史任务 </span>
              </Link>
            </Menu.Item>
          </SubMenu>

          <Menu.Item key={LinkConstant.DataView}>
            <Link to={LinkConstant.DataView}>
              <Icon type="laptop" />
              <span style={{ padding: "0 0 0 12px" }}>数据 </span>
            </Link>
          </Menu.Item>
          <Menu.Item key={LinkConstant.History}>
            <Link to={LinkConstant.History}>
              <Icon type="bars" />
              <span style={{ padding: "0 0 0 12px" }}>日志 </span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
