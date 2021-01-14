import React, { Component } from 'react'
import './FurniViewer.css'
export class FurniViewer extends Component {
    render() {
        return (
            <div className="frame">
                <div className="tab-container">
                    <button>Move</button>
                    <button>Rotate</button>
                    <button>Pick up</button>
                </div>
            </div>
        )
    }
}

export default FurniViewer
