import React from 'react'

export default class Home extends React.Component {
  render() {
    const homeSttyle = {
      textAlign: 'center'
    }
    return (
      <div style={homeSttyle}>
        <h1>welcome to simple-spiders-admin!</h1>
      </div>
    )
  }
}