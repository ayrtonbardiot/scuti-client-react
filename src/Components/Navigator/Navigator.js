import React, { Component } from 'react'
import './Navigator.css'
import Frame from '../../Layouts/Frame'

export class Navigator extends Component {
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
                    <input style={{ marginTop: "0px"}} placeholder="Search for a room..." />
                    <div class="tab-container">
                        <button>Public</button>
                        <button>Popular</button>
                        <button>Events</button>
                        <button>Me</button>
                    </div>
                </div>
            </Frame>
        )
    }
}

export default Navigator
