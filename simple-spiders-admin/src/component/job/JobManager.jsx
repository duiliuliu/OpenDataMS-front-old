import React from "react";
import { Table, Tabs } from "antd";
import PropTypes from "prop-types";

const TabPane = Tabs.TabPane;

export default class JobManager extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        status: PropTypes.string,
        name: PropTypes.string,
        data: PropTypes.string,
        creator: PropTypes.string,
        created: PropTypes.string,
        completed: PropTypes.string,
        time: PropTypes.string
      })
    )
  };

  static defaultProps = {
    data: []
  };
  constructor(props) {
    super(props);
    this.state = {
      pageSize: 10,
      currentPane: "all",
    };
  }

  componentWillReceiveProps(props){
    this.setState({
      data:props.data
    })
  }

  handleSelect = value => {
    this.setState({
      currentPane: value
    });
  };

  handleData = (data)=>{
    if(data==null) return null;
    return data.map(item => {
      if (this.state.currentPane === "all") {
        return item;
      } else if (this.state.currentPane === item.status) {
        return item;
      }
    });
  }

  columns = [
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
      render: text => <a href="javascript:;">{text}</a>
    },
    {
      title: "任务名称",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "数据",
      dataIndex: "data",
      key: "data",
      render: text => <a href="javascript:;">{text}</a>
    },
    {
      title: "创建人",
      dataIndex: "creator",
      key: "creator"
    },
    {
      title: "创建时间",
      dataIndex: "created",
      key: "created"
    },
    {
      title: "完成时间",
      key: "completed",
      dataIndex: "completed"
    },
    {
      title: "",
      dataIndex: "time",
      key: "time"
    }
  ];

  render() {
    this.props.getData
    const data = this.handleData(this.state.data);
    return (
      <div>
        <Tabs defaultActiveKey="all" onChange={this.handleSelect}>
          <TabPane tab="所有任务" key="all">
            <Table
              pagination={{ pageSize: this.state.pageSize }}
              locale={{ emptyText: "暂无数据" }}
              columns={this.columns}
              dataSource={data}
            />
          </TabPane>
          <TabPane tab="待定任务" key="pending">
            <Table
              pagination={{ pageSize: this.state.pageSize }}
              locale={{ emptyText: "暂无数据" }}
              columns={this.columns}
              dataSource={data}
            />
          </TabPane>
          <TabPane tab="运行中任务" key="running">
            <Table
              pagination={{ pageSize: this.state.pageSize }}
              locale={{ emptyText: "暂无数据" }}
              columns={this.columns}
              dataSource={data}
            />
          </TabPane>
          <TabPane tab="已完成任务" key="finished">
            <Table
              pagination={{ pageSize: this.state.pageSize }}
              locale={{ emptyText: "暂无数据" }}
              columns={this.columns}
              dataSource={data}
            />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
