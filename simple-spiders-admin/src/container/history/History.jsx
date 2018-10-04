import React from 'react'
import { data30 } from './data'
import HistoryComponent from '../../component/history/History'

export default class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pagination: {},
      loading: false,
    }
  }

  onChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  }

  fetch = (params = {}) => {
    this.setState({ loading: true })
    setTimeout(() => {
      console.log('params:', params);
      this.setState({
        loading: false,
        data: data30
      })
    }, 1000)
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    return (
      <HistoryComponent
        data={this.state.data}
        pagination={this.state.pagination}
        loading={this.state.loading}
        onChange={this.onChange}
        scroll={{ x: '130%', y: 240 }}
      />
    )
  }
}