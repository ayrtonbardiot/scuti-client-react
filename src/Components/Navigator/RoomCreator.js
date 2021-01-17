import React, { Component } from 'react'
import './RoomCreator.css'
import Frame from '../../Layouts/Frame'

export class RoomCreator extends Component {
    render() {
        return (
            <Frame width="600px" height="440px">
                <div className="RoomCreator">
                    <Frame.Header>
                        <div className="title">Room Creation</div>
                        <div className="right">
                            <button style={{ height: "22px" }}><img src="https://github.com/kozennnn/scuti-client/blob/master/public/img/cross.png?raw=true" /></button>
                        </div>
                    </Frame.Header>
                    <div className="left-panel">
                        <label>Room name</label>
                        <input v-model="roomName" />
                        <label>Room description</label>
                        <textarea rows="2" v-model="roomDescription"></textarea>
                        <div className="separator"></div>
                        <label>Category</label>
                        <select>
                            <option value="0">Trading</option>
                        </select>
                        <label>Max users</label>
                        <select v-model="roomMaxUsers">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                        <div className="separator"></div>
                        <button className="green"><img src="https://github.com/kozennnn/scuti-client/blob/master/public/img/CreateRoom.png?raw=true" />Create room</button>
                    </div>
                    <div className="right-panel">
                        <label style={{ marginLeft: "6px" }}>Room Model</label>
                        <div className="scrollbox" style={{ width: "calc(100% + 6px)", height: "calc(100% - 27px)", marginTop: "-5px" }}>
                            <div className="room-selector">
                                <img src="https://github.com/kozennnn/scuti-client/blob/master/public/img/rooms/12.png?raw=true" />
                                <div className="check"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Frame>
        )
    }
}

export default RoomCreator
