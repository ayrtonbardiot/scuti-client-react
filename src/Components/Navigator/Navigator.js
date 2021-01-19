import React, { Component } from 'react'
import './Navigator.css'
import Frame from '../../Layouts/Frame'
import * as _roomEngine from '../../index'
import Emitter from '../../Emitter'

export class Navigator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tabs: 'public',
            show: true
        }
    }

    componentDidMount() {
        Emitter.on('ROOM_CREATING', (value) => this.setState({ show: false }))
    }

    render() {
        return (
            <div className="Navigator">
                {this.state.show === true ? 
                <Frame width="400px" height="600px" >
                    <Frame.Header>
                        <div className="navigatorDragger">
                            <div className="title">Navigator</div>
                            <div className="right">
                                <button style={{ height: "22px" }}><img src="https://github.com/kozennnn/scuti-client/blob/master/public/img/question_mark.png?raw=true" /></button>
                                <button style={{ height: "22px" }}><img src="https://github.com/kozennnn/scuti-client/blob/master/public/img/cross.png?raw=true" /></button>
                            </div>
                        </div>
                    </Frame.Header>
                    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                        <input style={{ marginTop: "0px" }} placeholder="Search for a room..." />
                        <div className="tab-container">
                            <button onClick={() => this.setState({ tabs: 'public' })}>Public</button>
                            <button onClick={() => this.setState({ tabs: 'popular' })}>Popular</button>
                            <button onClick={() => this.setState({ tabs: 'events' })}>Events</button>
                            <button onClick={() => this.setState({ tabs: 'me' })}>Me</button>
                        </div>

                        {this.state.tabs === 'public' ?
                            <div className="scrollbox" style={{ height: "calc(100% - 185px)" }}>
                                <div className="hiddentab" style={{ padding: "0px 0px", height: "auto" }}>
                                    <div className="header">
                                        PUBLIC ROOMS
                            <div className="but hide">
                                        </div>
                                    </div>

                                </div>
                            </div>
                            : null
                        }

                        {this.state.tabs === 'popular' ?
                            <div className="scrollbox" style={{ height: "calc(100% - 185px)" }}>
                                <div className="hiddentab" style={{ padding: "0px 0px", height: "auto" }}>
                                    <div className="header">
                                        MOST POPULAR ROOMS
                            <div className="but hide">
                                        </div>
                                    </div>
                                    <div className="roomtab">
                                        <div className="thumbnail" style={{ backgroundImage: "url(https://github.com/kozennnn/scuti-client/blob/master/public/img/2.png?raw=true" }}>
                                        </div>
                                        <div onClick={() => _roomEngine.default.createRoom(`
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxx000000000xx
xxxxxxxxxxxxxxxxxxxxxxx000000000xx
xxxxxxxxxxxxxxxxxxxxxxx000000000xx
xxxxxxxxxxxxxxxxxxxxxxx000000000xx
xxxxxxxxxxxxxxxxxxxxxxx000000000xx
xxxxxxxxxxxxxxxxxxxxxxx000000000xx
xxxxxxxxxxxxxxxxxxxxxxx000000000xx
xxxxxxxxxxxxxxxxxxxxxxx000000000xx
xxxxxxxxxxxxxxxxxxxxxxxx00000000xx
xxxxxxxxxxxxxxxxxxxxxxxxx0000000xx
xxxxxxxxxxxxxxxxxxxxx00000000xxxxx
xxxxxxxxxxxxxxxxxxxxx00000000xxxxx
xxxxxxxxxxxxxxxxxxxxx00000000xxxxx
xxxxxxxxxxxxxxxxxxxx000000000xxxxx
xxxxxxxxxxxxxxxxxxxx000000000xxxxx
xxxxxxxxxxxxxxxxxxxxx00000000xxxxx
xxxxxxxxxxxxxxxxxxxxx00000000xxxxx
xxxxxxxxxxxxxxxxxxxxx000000000000x
xxxxxxxxxxxxxxxxxxxxx000000000000x
xxxxxxxxxxxxxxxxxxxxx000000000000x
x00000000xxxxxxxxxxxx000000000000x
x00000000xxxxxxxxxxxx0000000000000
x00000000xxxxxxxxxxxx0000000000000
x00000000xxxxxxxxxxxx000000000000x
x00000000xxxxxxxxxxxx000000000000x
x00000000xxxxxxxxxxxx000000000000x
x00000000xxxxxxxxxxxx000000000000x
x00000000xxxxxxxxxxxx00000000xxxxx
xxxx00xxxxxxxxxxxxxxx00000000xxxxx
xxxxxxxxxxxxxxxxxxxxx00000000xxxxx
xxxxxxxxxxxxxxxxxxxxx00000000xxxxx
xxxxxxxxxxxxxxxxxxxxx00000000xxxxx
xxxxxxxxxxxxxxxxxxxxx00000000xxxxx
xxxx0xxxxxxxxxxxxxxxxx00xxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   `)} className="text">
                                            Peta soon<br /><span style={{ color: "#8F8E90", fontSize: "13px" }}>Owner: </span><span style={{ color: "#72BBC1", fontSize: "13px" }}>nttZx</span>
                                        </div>
                                        <div className="usercount">
                                            <img src="https://github.com/kozennnn/scuti-client/blob/master/public/img/user.png?raw=true" /> 69
                            </div>
                                        <div className="room-state">
                                            <img src="https://github.com/kozennnn/scuti-client/blob/master/public/img/rooms/locked_pw.png?raw=true" />
                                        </div>
                                        <div className="room-info"></div>

                                    </div>
                                </div>
                            </div> : null}

                        {this.state.tabs === 'events' ?
                            <div className="scrollbox" style={{ height: "calc(100% - 185px)" }}>
                                <div className="hiddentab" style={{ padding: "0px 0px", height: "auto" }}>
                                    <div className="header">
                                        TOP PROMOTIONS
                            <div className="but hide">
                                        </div>
                                    </div>

                                </div>
                            </div> : null}

                        {this.state.tabs === 'me' ?
                            <div className="scrollbox" style={{ height: "calc(100% - 185px)" }}>
                                <div className="hiddentab" style={{ padding: "0px 0px", height: "auto" }}>
                                    <div className="header">
                                        MY ROOMS
                                        <div className="but hide">
                                        </div>
                                    </div>
                                    <div className="roomtab">
                                        <div className="thumbnail" style={{ backgroundImage: "url(https://github.com/kozennnn/scuti-client/blob/master/public/img/2.png?raw=true)" }}>
                                        </div>
                                        <div className="text">
                                            Peta 2<br /><span style={{ color: "#8F8E90", fontSize: "13px" }}>Owner: </span><span style={{ color: "#72BBC1", fontSize: "13px" }}>nttZx</span>
                                        </div>
                                        <div className="usercount">
                                            <img src="https://github.com/kozennnn/scuti-client/blob/master/public/img/user.png?raw=true" /> 420
                                        </div>
                                        <div className="room-state">
                                            <img src="https://github.com/kozennnn/scuti-client/blob/master/public/img/rooms/locked.png?raw=true" />
                                        </div>
                                        <div className="room-info"></div>

                                    </div>
                                    <div className="hiddentab" style={{ padding: "0px 0px", height: "auto" }}>
                                        <div className="header">
                                            My Favorite Rooms
                                            <div className="but show">
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div> : null
                        }
                    </div>

                </Frame>
                : null }
            </div>
        )
    }
    createRoom() {

    }
}

export default Navigator
