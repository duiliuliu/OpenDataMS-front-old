import React from 'react'
import { Input } from 'antd';
import { Table, Divider, Tag, Button } from 'antd';

const data = [{
    functionName: '1',
    creator: 'John Brown',
    created: 32,
    resource: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  }, {
    functionName: '2',
    creator: 'Jim Green',
    created: 42,
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
  render() {
    const columns = [{
        title: '函数名称',
        dataIndex: 'functionName',
        key: 'functionName',
        render: text => <a href="javascript:;">{text}</a>,
      }, {
        title: '创建人',
        dataIndex: 'creator',
        key: 'creator',
      }, {
        title: '创建时间',
        dataIndex: 'created',
        key: 'created',
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
            <Button type="primary" ghost>查看变更历史 {record.name}</Button>
            <Divider type="vertical" />
            <Button type="danger" ghost>删除</Button>
          </span>
        ),
    }];
    return (
      <div>
           <Search
                placeholder="输入函数名称搜索"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
                />
            <Table columns={columns} dataSource={data} />
            <br />
      </div>
    )
  }
}