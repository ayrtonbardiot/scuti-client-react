import React, { Component } from 'react'
import './Splash.css'

export class Splash extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             view: true
        }
    }
    
    render() {
        setTimeout(() => {
            this.setState({ view: false})
        }, 3000)
        return (
            <div className="Splash">
                { this.state.view ? 
                <div className="splash"></div>
                : null }
            </div>
        )
    }
}

export default Splash
