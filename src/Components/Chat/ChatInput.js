import React, { Component } from 'react'
import './ChatInput.css'

export class ChatInput extends Component {
    render() {
        return (
                <div className="scuti-room-chatinput-component">
                    <div className="chatinput-container">
                        <input type="text" name="chat-input" className="chat-input" />
                        <div className="scuti-room-chatinput-styleselector-component">
                            <i className="icon chatstyles-icon"></i>
                        </div>
                    </div>
                </div>
        )
    }
}

export default ChatInput
