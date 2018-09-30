import React from 'react';
import PageHeader from 'ant-design-pro/lib/PageHeader';
import NoticeIcon from 'ant-design-pro/lib/NoticeIcon';
import spiderSVG from '../../images/spider.svg'
import rightIcon from '../../images/interesting.gif'

export default class PagesHeader extends React.Component {
  state = { msgCount: 0 }
  render() {
    const title = <span>simple-spiders-admin</span>;
    const action = (
      <div>
        <NoticeIcon count={this.state.msgCount} />
        <img className="righticon" alt="" src={rightIcon} />
      </div>
    );
    return (
      <div>
        <PageHeader
          className="pageheader"
          title={title}
          logo={<img alt="" src={spiderSVG} />}
          action={action}
        />
      </div>
    );
  }
}
