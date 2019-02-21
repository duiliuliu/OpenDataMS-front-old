import React from 'react'
import { Input,Tabs,Tree   } from 'antd';

const treeData = [{
    name:"数据管理",
    data:[{
      name:"佛山",
      data:["佛山武装数据.csv","佛山农业数据.xlsx"]
    },{
      name:"深圳",
      data:["深圳武装数据.csv","深圳农业数据.xlsx"]
    },{
      name:"贵州",
      data:["贵州武装数据.csv","贵州农业数据.xlsx"]
    }]
  }]


const TabPane = Tabs.TabPane;
const DirectoryTree = Tree.DirectoryTree;
const { TreeNode } = Tree;

export default class DataManager extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [];
    this.state = {
      activeKey: "tree",
      panes,
      openPanes:[]
    };
  }

  TreeMap(node){
    if(!(node[0].name&&node[0].data)){
      return node.map((subNode)=>{
        return (
          <TreeNode title={subNode} key={subNode} isLeaf />
        );
      });
    }
    return (
      node.map((subNode)=>{
        return (
          <TreeNode title={subNode.name} key={subNode.name}>
            { this.TreeMap(subNode.data) }
          </TreeNode>
        )
      })
    );
  }
  
  onExpand = () => {
    console.log('Trigger Expand');
  };

  onChange = (activeKey) => {
    this.setState({ activeKey });
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }

  onSearch = (value)=>{
    console.log(value)
  }

  add = (value) => {
    const panes = this.state.panes;
    const tab = value[0];
    // 判断标签页是否存在
    const pane = { title: tab, content: 'Content of new Tab'+tab, key: tab }
    if(this.state.openPanes.indexOf(tab)===-1){
      panes.push(pane);
      this.state.openPanes.push(tab)
    }
    this.setState({ panes, activeKey:tab });
  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.state.openPanes.pop(targetKey)
    this.setState({ panes, activeKey });
  }

  render() {
    return (
      <div>
          <Tabs
            hideAdd
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            type="editable-card"
            onEdit={this.onEdit}
          >
            <TabPane tab='数据目录' key="tree" closable={false}> 
              <Input placeholder="输入名称搜索" onChange={this.onSearch} style={{ width: 200 }} />
              <br />
              <DirectoryTree
                multiple
                autoExpandParent={false}
                onSelect={this.add}
                onExpand={this.onExpand}
              >
                { this.TreeMap(treeData) }
              </DirectoryTree>
            </TabPane>
            {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>)}
          </Tabs>
      </div>
    )
  }
}