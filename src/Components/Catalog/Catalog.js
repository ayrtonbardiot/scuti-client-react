import React, { Component } from 'react'
import './Catalog.css'
import Frame from '../../Layouts/Frame'

export class Catalog extends Component {
    render() {
        return (
            <Frame width="600px" height="450px">
                <Frame.Header>
                    <div className="navigatorDragger">
                        <div className="title">Catalog</div>
                        <div className="right">
                            <button style={{ height: "22px" }}><img src="https://github.com/kozennnn/scuti-client/blob/master/public/img/question_mark.png?raw=true" /></button>
                            <button style={{ height: "22px" }}><img src="https://github.com/kozennnn/scuti-client/blob/master/public/img/cross.png?raw=true" /></button>
                        </div>
                    </div>
                </Frame.Header>
                <Frame.Content>
                    <div className="left-panel-ctlg">
                        <input placeholder="Search..." />
                        <div className="separator"></div>
                        <div className="scrollbox" style={{ height: "calc(100% - 94px)", marginBottom: "12px" }}>
                            <div className="menu-container">
                                <button>
                                    <img src="https://www.habboassets.com/assets/images/catalog/icons/icon_206.png" /> Furni by culture <img className="chevron active" src="https://github.com/kozennnn/scuti-client/blob/master/public/img/chevron_bottom.png?raw=true" />
                                </button>
                                <div className="subcategory">
                                    <button>
                                        <img src="https://www.habboassets.com/assets/images/catalog/icons/icon_281.png" /> Tokyo
                            </button>
                                </div>
                            </div>
                        </div>
                        <div className="scrollbox" style={{ height: "32px" }}>
                            <div className="menu-container" style={{ display: "flex", flex: "0 1 auto", flexDirection: "row" }}>
                                <button style={{ textAlign: "right", width: "40%" }}>
                                    <img src="https://github.com/kozennnn/scuti-client/blob/master/public/img/credits.png?raw=true" style={{ float: "left" }} /> 100000
                        </button>
                                <button style={{ textAlign: "right", width: "30%" }}>
                                    <img src="https://github.com/kozennnn/scuti-client/blob/master/public/img/duckets.png?raw=true" style={{ float: "left" }} /> 100
                        </button>
                                <button style={{ textAlign: "right", width: "30%" }}>
                                    <img src="https://github.com/kozennnn/scuti-client/blob/master/public/img/diamonds.png?raw=true" style={{ float: "left" }} /> 5
                        </button>
                            </div>
                        </div>
                        <div className="right-panel-ctlg">
                            <div className="tab-container">
                                <button>caption</button>
                            </div>
                            <div className="separator"></div>
                        </div>
                    </div>
                </Frame.Content>
            </Frame>
        )
    }
}

export default Catalog
