import React from 'react';
import PageHeader from 'ant-design-pro/lib/PageHeader';
import { Button, Menu, Dropdown, Icon } from 'antd';
import spiderSVG from '../images/spider.svg'
import rightIcon from '../images/interesting.gif'

export default class PagesHeader extends React.Component {
  render() {
    const ButtonGroup = Button.Group;
    const title = <h4>simple-spiders-admin</h4>;
    const action = (
      <div>
        <img className="usericon" alt="" src={rightIcon} />
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
