import React, { Component } from 'react'
import './RoomView.css'
import * as _roomEngine from '../../index'
import Emitter from '../../Emitter'

export class RoomView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       zIndex: 0
    }
  }
  
  componentDidMount() {
    Emitter.on('ROOM_CREATING', (newvalue) => { this.setState({ zIndex: newvalue })})
  }
  
  render() {
    return (
      <canvas id="canva1" style={{ zIndex: this.state.zIndex }}/>
    )
  }
}

export default RoomView
