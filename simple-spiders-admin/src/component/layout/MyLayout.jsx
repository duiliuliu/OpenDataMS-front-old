import React from "react";
import { BrowserRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Layout, Breadcrumb, Icon } from "antd";
import AppRouter from "../../router/router";
import PagesHeader from "./PageHeader";
import PagesFooter from "./PageFooter";
import SliderBat from "./SliderBar";

const { Content } = Layout;

export default class MyLayout extends React.Component {
  static contextTypes = { router: PropTypes.object };

  constructor(props) {
    super(props);
    this.resize.bind(this);
    this.state = {
      collapsed: false,
      width: 200
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize);
  }

  resize = event => {
    const width = document.body.offsetWidth;
    if (width < 800 && !this.state.collapsed) {
      this.toggleCollapsed();
    }
  };

  changeRouter = event => {
    // 改变路由显示
    // 路由改变后，菜单焦点相应改变
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      width: this.state.collapsed ? 200 : 55
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <PagesHeader />
          <Layout>
            <SliderBat
              width={this.state.width}
              collapsed={this.state.collapsed}
            />

            <Layout style={{ padding: "0 24px 24px" }}>
              <Breadcrumb style={{ margin: "8px 0" }}>
                <Breadcrumb.Item>
                  <Icon
                    className="collapse"
                    type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                    onClick={this.toggleCollapsed}
                  />
                </Breadcrumb.Item>

                {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item> */}
              </Breadcrumb>
              <Content
                style={{
                  background: "#fff",
                  padding: 24,
                  margin: 0,
                  minHeight: 280
                }}
              >
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
