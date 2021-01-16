import React, { Component } from 'react'
import './FurniViewer.css'
export class FurniViewer extends Component {
    render() {
        return (
            <div className="frame-furni">
                <div className="tab-container-furni">
                    <button>Move</button>
                    <button>Rotate</button>
                    <button>Pick up</button>
                </div>
            </div>
        )
    }
}

export default FurniViewer
