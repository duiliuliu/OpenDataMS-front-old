import React from 'react'
import { Input } from 'antd';

const Search = Input.Search;
export default class DataManager extends React.Component {
  render() {
    return (
      <div>
           <Search
                placeholder="输入函数名称搜索"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
                />
            <br />
      </div>
    )
  }
}