import React from 'react'
import { Table, } from 'antd';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

const data = null;

export default class JobSchedulerManager extends React.Component {

  constructor(props){
    super(props);
    this.state={
      pageSize:20,
    }
  }

  handleSelect=(e)=>{
    console.log(e)
  } ;

  render() {
    const columns = [{
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: '任务名称',
      dataIndex: 'name',
      key: 'name',
    },{
      title: '数据',
      dataIndex: 'data',
      key: 'data',
      render: text => <a href="javascript:;">{text}</a>,
    },{
      title: '创建人',
      dataIndex: 'creator',
      key: 'creator',
    }, {
      title: '创建时间',
      dataIndex: 'created',
      key: 'created',
    }, {
      title: '完成时间',
      key: 'completed',
      dataIndex: 'completed',
    }, {
      title: '',
      dataIndex: 'time',
      key: 'time',
  }];
    return (
      <div>
       <Tabs defaultActiveKey="1" onChange={this.handleSelect}>
        <TabPane tab="所有任务" key="all"><Table pagination={{ pageSize: this.state.pageSize }}  locale={{emptyText: '暂无数据' }} columns={columns} dataSource={null} /></TabPane>
        <TabPane tab="待定任务" key="pending"><Table pagination={{ pageSize: this.state.pageSize }} locale={{emptyText: '暂无数据' }} columns={columns} dataSource={data} /></TabPane>
        <TabPane tab="运行中任务" key="running"><Table pagination={{ pageSize: this.state.pageSize }} locale={{emptyText: '暂无数据' }} columns={columns} dataSource={data} /></TabPane>
        <TabPane tab="已完成任务" key="finished"><Table pagination={{ pageSize: this.state.pageSize }} locale={{emptyText: '暂无数据' }} columns={columns} dataSource={data} /></TabPane>
      </Tabs>
      </div>
    )
  }
}