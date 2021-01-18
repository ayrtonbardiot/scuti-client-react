import React, { Component } from 'react'
import './RoomView.css'
import * as _roomEngine from '../../index'

export class RoomView extends Component {
  render() {
    return (
      <canvas id="canva1" style={{ zIndex: 99999999 }}/>
    )
  }
}

export default RoomView
