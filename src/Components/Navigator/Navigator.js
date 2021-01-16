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
                                <button style={{ height: "22px;" }}><img src="./../../../../public/img/question_mark.png" /></button>
                                <button style={{ height: "22px;" }}><img src="./../../../../public/img/cross.png" /></button>
                            </div>
                        </div>
                    </div>
                </Frame.Header>
            </Frame>
        )
    }
}

export default Navigator
