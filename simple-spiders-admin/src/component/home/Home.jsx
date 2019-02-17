import React from 'react'
import PropTypes from "prop-types";
import { ChartCard, MiniBar, MiniProgress } from 'ant-design-pro/lib/Charts';
import Trend from 'ant-design-pro/lib/Trend';
import moment from 'moment';
import { Row, Col, Icon, Tooltip, Table, Skeleton, Card } from 'antd';
import NativeIcon from '../icon/NativeIcon'
import * as LinkConstant from '../../constant/LinkConstant'

export default class Home extends React.Component {
  static contextTypes = { router: PropTypes.object };
  static propTypes = {
    job: PropTypes.shape({
      url: PropTypes.string,
      level: PropTypes.number,
      allNum: PropTypes.number,
      accomplishedNum: PropTypes.number
    })
  }

  static defaultProps = {
    job: {
      url: "www.this.com",
      level: 1,
      allNum: 1,
      accomplishedNum: 0
    }
  }

  linkedToJobScheduler = () => {
    this.context.router.history.push({
      pathname: LinkConstant.JobScheduler
    })
  }

  linkedToDataView = () => {
    this.context.router.history.push({
      pathname: LinkConstant.DataView
    })
  }

  linkedToHistory = () => {
    this.context.router.history.push({
      pathname: LinkConstant.History
    })
  }

  render() {
    const visitData = [];
    const beginDay = new Date().getTime();
    for (let i = 0; i < 7; i += 1) {
      if (i < 4) {
        visitData.push({
          x: i,
          y: Math.floor(Math.random() * 100) + 10,
        });
      } else {
        visitData.push({
          x: i,
          y: 0
        });
      }

    }
    const dataSource = [{
      key: '1',
      level: 'info',
      time: moment(new Date(beginDay + (1000 * 60 * 60 * 24 * 2))).format('YYYY-MM-DD HH:MM:SS'),
      msg: 'www.this.com/data=1 下载完成'
    }, {
      key: '2',
      level: 'info',
      time: moment(new Date(beginDay + (1000 * 60 * 60 * 24 * 1))).format('YYYY-MM-DD HH:MM:SS'),
      msg: 'www.this.com/data=2 下载完成'
    }, {
      key: '3',
      level: 'warn',
      time: moment(new Date(beginDay + (1000 * 60 * 60 * 24 * 5))).format('YYYY-MM-DD HH:MM:SS'),
      msg: 'www.this.com/data=3 下载失败'
    }, {
      key: '4',
      level: 'info',
      time: moment(new Date(beginDay + (1000 * 60 * 60 * 24 * 2))).format('YYYY-MM-DD HH:MM:SS'),
      msg: 'www.this.com/data=4 下载完成'
    }];

    const columns = [{
      title: 'level',
      dataIndex: 'level',
      key: 'level',
    }, {
      title: 'time',
      dataIndex: 'time',
      key: 'time',
    }, {
      title: 'msg',
      dataIndex: 'msg',
      key: 'msg',
    }];

    const percent = this.props.job.accomplishedNum / this.props.job.allNum;
    // const now = moment().format('YYYY年MM月DD日 HH:MM:SS'); 当前时间
    const { Meta } = Card;

    return (
      <div>
        <Row>
          <Col span={7} style={{ marginRight: 20 }}>
            <Card
              // style={{ width: 300 }}
              // 设置是全局系统设置
              // edit是指个人信息，设置中包含个人信息
              actions={[<Icon type="setting" title="asdas" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
              >
              <Skeleton loading={false} avatar active>
                <Meta
                  avatar={<NativeIcon type="石化" />}
                  title="你好，对六"
                  description="This is the description"
                />
              </Skeleton>
            </Card>
          </Col>
          <Col span={7} style={{ marginRight: 20 }}>
            <ChartCard
                title="新建"
                avatar={<NativeIcon type="new" />}
                total={() => (
                  <span style={{opacity:0.3}}>快速新建任务</span>
                )}
                footer={
                  <hr/>
                }
                contentHeight={46}
              >
            </ChartCard>
          </Col>

          <Col span={7} style={{ marginRight: 20 }}>
            <ChartCard
                title="数据"
                avatar={<NativeIcon type="database" />}
                total={() => (
                  <span style={{opacity:0.3}}>管理数据</span>
                )}
                footer={
                  <hr/>
                }
                contentHeight={46}
              >
            </ChartCard>
          </Col>
        </Row>


        <Row>
          <Col span={24} style={{ marginTop: 20, marginRight: 20 }} >
            <ChartCard
              title="当前任务"
              avatar={<NativeIcon type="process" />}
              action={
                <Tooltip title={'完成率：' + percent}>
                  <Icon type="info-circle-o" />
                </Tooltip>
              }
              total={() => (
                <span>{this.props.job.url}</span>
              )}
              footer={
                <MiniProgress percent={percent} strokeWidth={8} target={percent} />
              }
              contentHeight={46}
            >
              <span>
                当前任务深度
          <Trend flag="up" style={{ marginLeft: 8, color: "rgba(0,0,0,.85)" }}>
                  {this.props.job.level}
                </Trend>
              </span>
              <span style={{ marginLeft: 16 }}>
                所有任务
          <Trend
                  flag="down"
                  style={{ marginLeft: 8, color: "rgba(0,0,0,.85)" }}
                >
                  {this.props.job.allNum}
                </Trend>
              </span>
              <span style={{ marginLeft: 16 }}>
                完成任务
          <Trend
                  flag="down"
                  style={{ marginLeft: 8, color: "rgba(0,0,0,.85)" }}
                >
                  {this.props.job.accomplishedNum}
                </Trend>
              </span>
            </ChartCard>
          </Col>
        </Row>

        <Row>
          <Col span={11} style={{ marginTop: 20}}>
            <ChartCard
              title="任务队列"
              contentHeight={142}
              action={<Tooltip title="查看详情" onClick={this.linkedToJobScheduler.bind(this)}><Icon type="info-circle-o" /></Tooltip>}
              footer={
                <div>
                  <span style={{ marginRight: 12 }}>level ： 队列级别</span>
                  <span>num ： 队列中数据数量</span>
                </div>
              }
            >
              <MiniBar
                height={100}
                data={visitData}
              />
            </ChartCard>
          </Col>
          <Col span={1} style={{ marginRight: -20 }} />
          <Col span={12} style={{ marginTop: 20 }}>
            <ChartCard
              title="log日志"
              action={<Tooltip title="查看详情" onClick={this.linkedToHistory.bind(this)}><Icon type="info-circle-o" /></Tooltip>}
              contentHeight={46}
              footer={
                <Table
                  showHeader={false}
                  size="small"
                  dataSource={dataSource}
                  columns={columns}
                  pagination={false}
                />
              }
            >

            </ChartCard>
          </Col>
        </Row>
      </div >
    )
  }
}