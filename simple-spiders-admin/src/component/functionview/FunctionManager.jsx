import React from 'react'
import { Input } from 'antd';
import { Table, Divider,Modal, Tag, Button } from 'antd';

const data = [{
    functionName: 'udftest',
    lastModifier: 'John Brown',
    lastModified: 32,
    resource: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  }, {
    functionName: 'extract_scan_n_feature',
    lastModifier: 'Jim Green',
    lastModified: 42,
    resource: 'London No. 1 Lake Park',
    tags: ['loser'],
  }, {
    functionName: '3',
    creator: 'Joe Black',
    created: 32,
    resource: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  }];



  

const color = "green"
const Search = Input.Search;
export default class FunctionManager extends React.Component {
  constructor(props){
    super(props);
    this.state={
      pageSize:10,
      visible: false,
      currentFunc:""
    }
  }
  
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  onClick = (e) =>{
    this.showModal();
  }

  columns = [{
    title: '函数名称',
    dataIndex: 'functionName',
    key: 'functionName',
    render: text => <a href="javascript:;">{text}</a>,
  }, {
    title: 'last modifier',
    dataIndex: 'lastModifier',
    key: 'lastModifier',
  }, {
    title: 'last modified',
    dataIndex: 'lastModified',
    key: 'lastModified',
  }, {
    title: '资源名称',
    key: 'resource',
    dataIndex: 'resource',
    render: text => (
      <a>
         <Tag color={color}>{text}</Tag>
      </a>
    ),
  }, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <Button type="primary" ghost onClick={() => this.onClick(record)}>查看变更历史</Button>
        <Divider type="vertical" />
        <Button type="danger" ghost>删除</Button>
      </span>
    ),
}];

  render() {
    return (
      <div>
           <Search
                placeholder="输入函数名称搜索"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
                />
            <Table columns={this.columns} dataSource={data} pagination={{ pageSize: this.state.pageSize }} />
            <br />
            <Modal
              title={"Basic Modal"}
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
      </div>
    )
  }
}