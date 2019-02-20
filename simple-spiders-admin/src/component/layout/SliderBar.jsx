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
            <Menu.Item key={LinkConstant.JobSchedulerManager}>
              <Link to={LinkConstant.JobSchedulerManager}>
                <span style={{ padding: "0 0 0 12px" }}>任务管理 </span>
              </Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key={LinkConstant.DataView}
            title={
              <span>
                <Icon type="code" />
                <span style={{ padding: "0 0 0 12px" }}>函数 </span>
              </span>
            }
          >
            <Menu.Item key={LinkConstant.FunctionRegister}>
              <Link to={LinkConstant.FunctionRegister}>
                <span style={{ padding: "0 0 0 12px" }}>注册函数 </span>
              </Link>
            </Menu.Item>
            <Menu.Item key={LinkConstant.FunctionManager}>
              <Link to={LinkConstant.FunctionManager}>
                <span style={{ padding: "0 0 0 12px" }}>函数管理 </span>
              </Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key={LinkConstant.DataView}
            title={
              <span>
                <Icon type="laptop" />
                <span style={{ padding: "0 0 0 12px" }}>数据 </span>
              </span>
            }
          >
            <Menu.Item key={LinkConstant.DataManager}>
              <Link to={LinkConstant.DataManager}>
                <span style={{ padding: "0 0 0 12px" }}>数据管理 </span>
              </Link>
            </Menu.Item>
            <Menu.Item key={LinkConstant.ProcessData}>
              <Link to={LinkConstant.ProcessData}>
                <span style={{ padding: "0 0 0 12px" }}>数据清洗 </span>
              </Link>
            </Menu.Item>
            <Menu.Item key={LinkConstant.History}>
              <Link to={LinkConstant.History}>
                <span style={{ padding: "0 0 0 12px" }}>数据清洗日志 </span>
              </Link>
            </Menu.Item>
          </SubMenu>
          
          {/* <Menu.Item key={LinkConstant.History}>
            <Link to={LinkConstant.History}>
              <Icon type="bars" />
              <span style={{ padding: "0 0 0 12px" }}>日志 </span>
            </Link>
          </Menu.Item> */}
        </Menu>
      </Sider>
    );
  }
}
