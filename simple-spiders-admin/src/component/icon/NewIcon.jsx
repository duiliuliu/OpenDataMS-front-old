import React from 'react'
import { NewIconUrl } from '../../constant/ImagesConstant'

export default class ProcessIcon extends React.Component {
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
        src={NewIconUrl}
        alt="新建"
      />
    )
  }
}

