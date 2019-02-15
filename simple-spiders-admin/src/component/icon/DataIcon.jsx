import React from 'react'
import { DataIconUrl } from '../../constant/ImagesConstant'

export default class DataIcon extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      width:this.props.width ? this.props.width : 56,
      height:this.props.height ? this.props.height : 56
    }
  }
  render() {
    return (
      <img
        className="newIcon"
        style={{ width: this.state.width, height: this.state.height }}
        src={DataIconUrl}
        alt="新建"
      />
    )
  }
}

