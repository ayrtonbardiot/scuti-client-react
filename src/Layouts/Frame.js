import React, { Component } from 'react'
import Draggable from 'react-draggable'
import './Frame.css'

export class Frame extends Component {
    render() {
        return (
            <div>
                <Draggable>
                    <div class="frame">
                        <div class="header" id="dragger">
                            <slot name="header"></slot>
                        </div>
                        <div class="content">
                            <slot></slot>
                        </div>
                    </div>
                </Draggable>
            </div>
        )
    }
}

export default Frame
