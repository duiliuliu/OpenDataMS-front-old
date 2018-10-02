import React from 'react';
import PageHeader from 'ant-design-pro/lib/PageHeader';
import NoticeIcon from 'ant-design-pro/lib/NoticeIcon';
import RightIcon from '../../images/RightIcon';
import SpiderIcon from '../../images/SpiderIcon';

export default class PagesHeader extends React.Component {
  state = { msgCount: 0 }
  render() {
    const title = <span>simple-spiders-admin</span>;
    const action = (
      <div>
        <NoticeIcon count={this.state.msgCount} />
        <RightIcon />
      </div>
    );
    return (
      <div>
        <PageHeader
          className="pageheader"
          title={title}
          logo={<SpiderIcon />}
          action={action}
        />
      </div>
    );
  }
}
