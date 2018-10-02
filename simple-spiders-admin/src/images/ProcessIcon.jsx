import React from 'react'
import { ProcessIconUrl } from '../constant/ImagesConstant'

export default class ProcessIcon extends React.Component {
  render() {
    return (
      <img
        style={{ width: 56, height: 56 }}
        src={ProcessIconUrl}
        alt=""
      />
    )
  }
}

