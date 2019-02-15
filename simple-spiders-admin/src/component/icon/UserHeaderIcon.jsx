import React from 'react'
import { userHeaderUrls } from '../../constant/ImagesConstant'


// 将引入图片array结构变化为dict结构与用户ID绑定，每个用户则会有固定的头像了

export default class UserHeaderIcon extends React.Component {

  render(){
    const UserHeader = userHeaderUrls[Math.floor((Math.random() * userHeaderUrls.length) + 0)]
    return (
        <img
          style={{ width: 56, height: 56 }}
          src={UserHeader}
          alt=""
        />
      )
  }
}