import React, { Component } from 'react'
import './ChatInput.css'
import Emitter from '../../Emitter'

export class ChatInput extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show: false
        }
    }
    
    componentDidMount() {
        Emitter.on('ROOM_CREATING', (value) => this.setState({ show: true }))
    }
    
    render() {
        return (
                <div className="scuti-room-chatinput-component" style={{ zIndex: 2}}>
                    {this.state.show === true ? 
                    <div className="chatinput-container">
                        <input type="text" name="chat-input" className="chat-input" />
                        <div className="scuti-room-chatinput-styleselector-component">
                            <i className="icon chatstyles-icon"></i>
                        </div>
                    </div> : null }
                </div>
        )
    }
}

export default ChatInput
