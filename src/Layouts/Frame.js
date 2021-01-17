import React, { Component } from 'react'
import Draggable from 'react-draggable'
import './Frame.css'

export class Frame extends Component {
    static Header = props => (
        <div className="header" id="dragger">{props.children}</div>
      );
      static Content = props => <div className="content">{props.children}</div>;
    render() {
        return (
            <div>
                <Draggable>
                    <div className="frame" style={{ width: this.props.width, height: this.props.height}}>
                        {this.props.children}
                    </div>
                </Draggable>
            </div>
        )
    }
}

export default Frame
