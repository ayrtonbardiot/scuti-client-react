import React, { Component } from 'react'
import './Navigator.css'
import Frame from '../../Layouts/Frame'

export class Navigator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             tabs: 'public'
        }
    }
    
    render() {
        return (
            <Frame width="400px" height="600px">
                <Frame.Header>
                    <div className="Navigator">
                        <div className="navigatorDragger">
                            <div className="title">Navigator</div>
                            <div className="right">
                                <button style={{ height: "22px;" }}><img src="https://github.com/kozennnn/scuti-client/blob/master/public/img/question_mark.png?raw=true" /></button>
                                <button style={{ height: "22px;" }}><img src="https://github.com/kozennnn/scuti-client/blob/master/public/img/cross.png?raw=true" /></button>
                            </div>
                        </div>
                    </div>
                </Frame.Header>
                <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                    <input style={{ marginTop: "0px" }} placeholder="Search for a room..." />
                    <div className="tab-container">
                        <button onClick={ () => this.setState({ tabs: 'public'})}>Public</button>
                        <button onClick={ () => this.setState({ tabs: 'popular'})}>Popular</button>
                        <button onClick={ () => this.setState({ tabs: 'events'})}>Events</button>
                        <button>Me</button>
                    </div>
                    
                    { this.state.tabs === 'public' ?
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
                    
                    { this.state.tabs === 'popular' ? 
                    <div className="scrollbox" style={{ height: "calc(100% - 185px)" }}>
                    <div className="hiddentab" style={{ padding: "0px 0px", height: "auto" }}>
                        <div className="header">
                            MOST POPULAR ROOMS
                            <div className="but hide">
                            </div>
                        </div>
                        <div className="roomtab">
                            <div className="thumbnail" style={{ backgroundImage: "url(./../../../../public/img/2.png"}}>
                            </div>
                            <div className="text">
                                Peta soon<br/><span style={{ color: "#8F8E90", fontSize: "13px" }}>Owner: </span><span style={{ color: "#72BBC1", fontSize: "13px"}}>nttZx</span>
                            </div>
                            <div>
                                <img src="./../../../../public/img/user.png" /> 69
                            </div>
                            <div className="room-state">
                                <img v-if="room.state == 'password'" src="./../../../../public/img/rooms/locked_pw.png" />
                            </div>
                            <div className="room-info"></div>

                        </div>
                    </div>
                </div> : null }
                
                { this.state.tabs === 'events' ? 
                <div className="scrollbox" style={{ height: "calc(100% - 185px)" }}>
                <div className="hiddentab" style={{ padding: "0px 0px", height: "auto" }}>
                        <div className="header">
                            TOP PROMOTIONS
                            <div className="but hide">
                            </div>
                        </div>

                    </div>
                </div> : null }
                </div>

            </Frame>
        )
    }
}

export default Navigator
