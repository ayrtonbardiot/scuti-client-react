import React, { Component } from 'react'
import Draggable from 'react-draggable'
import { Slot } from 'react-slot'
import './Frame.css'

export class Frame extends Component {
    render() {
        return (
            <div>
                <Draggable>
                    <div className="frame" style={{ width: this.props.width, height: this.props.height}}>
                        <div className="header" id="dragger">
                            <Slot name="header"></Slot>
                        </div>
                        <div className="content">
                            <Slot></Slot>
                        </div>
                    </div>
                </Draggable>
            </div>
        )
    }
}

export default Frame
