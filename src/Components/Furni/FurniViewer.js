import React, { Component } from 'react'
import './FurniViewer.css'
import Emitter from '../../Emitter'

export class FurniViewer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false
        }
    }

    componentDidMount() {
        Emitter.on('FURNI_CLICKED', () => this.setState({ show: true }))
    }


    render() {
        return (
            <div className="FurniViewer">
                { this.state.show === true ?
                    <div className="frame-furni" style={{ zIndex: 2 }}>
                        <div className="tab-container-furni">
                            <button>Move</button>
                            <button>Rotate</button>
                            <button>Pick up</button>
                        </div>
                    </div>
                    : null}
            </div>
        )
    }
}

export default FurniViewer
