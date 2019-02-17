import React from 'react';
import PageHeader from 'ant-design-pro/lib/PageHeader';
import NoticeIcon from 'ant-design-pro/lib/NoticeIcon';
import NativeIcon from '../icon/NativeIcon';

export default class PagesHeader extends React.Component {
  state = { msgCount: 0 }
  render() {
    const title = <span>simple-spiders-admin</span>;
    const action = (
      <div>
        <NoticeIcon count={this.state.msgCount} />
        <NativeIcon type="interesting" />
      </div>
    );
    return (
      <div>
        <PageHeader
          className="pageheader"
          title={title}
          logo={<NativeIcon type="spider" width={30} height={30} />}
          action={action}
        />
      </div>
    );
  }
}
