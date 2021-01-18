import React, { Component } from 'react'
import './RoomTool.css'

export class RoomTool extends Component {
    render() {
        return (
            <div className="RoomTool">
                <div className="room-tool" style={{zIndex: 2}}>
                    <div className="text">
                        name<br /><span style={{color: "#8F8E90", fontSize: "13px"}}>Owner: </span><span style={{color: "#72BBC1", fontSize: "13px"}}>nota</span>
                    </div>
                    <div className="button-area">
                        <button><img src="https://github.com/kozennnn/scuti-client/blob/master/public/img/settings.png?raw=true" /></button>
                        <button><img src="https://github.com/kozennnn/scuti-client/blob/master/public/img/zoom.png?raw=true" /></button>
                        <button><img src="https://github.com/kozennnn/scuti-client/blob/master/public/img/chat_history.png?raw=true" /></button>
                        <button><img src="https://github.com/kozennnn/scuti-client/blob/master/public/img/heart.png?raw=true" /></button>
                    </div>
                </div>
                <div className="toggle" style={{zIndex: 2}}>
                    <div className="arrow active"></div>
                </div>
            </div>
        )
    }
}

export default RoomTool
