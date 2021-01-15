import React, { Component } from 'react'
import './ToolBar.css'
export class ToolBar extends Component {
    render() {
        return (
                <div className="bobbax-toolbar-component">
                    <div className="gradient">

                    </div>
                    <div className="bottom-left">
                        <ul className="list-group">
                            <li className="list-group-item">
                    <i className="icon icon-habbo"></i>
                </li>
                        <li className="list-group-item">
                    <i className="icon icon-rooms"></i>
                </li>
                    <li className="list-group-item">
                    <i className="icon icon-catalog"></i>
                </li>
            </ul>
        </div >
                <div className="bottom-center-left">
                    <ul className="list-group">
                        <li className="list-group-item avatar-image">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAACCCAYAAADGxd9AAAAEk0lEQVR4Xu3bsWtTURQG8NslIB2MSxZBOoqDCioIxaGLIIiToCB1EdQ/QZcMXdTJua5FqOCkouLiIEKhujgo6FKkU0CIQhG6RM7tO7cnN/elzyLfvYnfG6xJX/L1/d7nubcBZxwPiMAMJIUhjtCgEhCa0CABUAwbTWiQACiGjSY0SAAUw0YTGiQAimGjCQ0SAMWw0YQGCYBi2GhCgwRAMWw0oUECoBg2mtAgAVAMG01okAAoho0mNEgAFMNGExokAIphowkNEgDFsNGEBgmAYthoQoMEQDFsNKFBAqAYNprQIAFQzDQ2euBcef9lZFqhpaf22rLjTyV0f/Gea6/cVWxBjuFBA2M3ZlKgFasOaKi9Ai2HYG9c6bq5J0uEHlOtgKtwdedW7fXf1nNfb35xZztzrt06YNsNb7IGltrogYL1t3+P4AiePC9f9dDz1nob/ilF1mbnXiBLgB4ZC4IcAyuuwlpsiyzAHtfcBDOv//tGjzRYobS5qWbXjhKDzEaPKg1k4Yrb6OduNSaaoNsmG2QuhsbbQ8dNju+Hbfa4caLI0VaPo0PbnJrB8YIXA1s9vVG6E7l/5qK7fXQ++86jhMVQnMLYiNGajI3EwucW3533b7Vy7o0rAbsY6NWF635L1uSofgFJnqrA9puKfWf9RbZZXRS07n9lL2zR9bECpzDrbpAgmyPb9WYLjmAG0mg9BFlxLfJ+gNvdZddfuuU6qx9c7+ppNtpC25sg6NLkv0U+/Gnn96Ctp4/819zYRTbaNns/yNLi2cs3AzKhd6sbRoeODZ3XddB29todht8/d5fDO7eOnXLbnz/6x/L3XOOjmEbrPjreUcQjQ4EtpoyFoW1hNZflOZnNAs3RYVpdt3OwjbXA9nyLHePKeYLNRu+I7fXhvh8JMnvtIqfYMXR80wgdNVraG+19wxmpRc5C62vlPGmvHrmR5ecoZUaryUCx4gUutchVC1vYI9ubVDPDs11vtuC6eSwj5NLjeXfwyOzQKdLyVFOjRc69fdXxr1u40AuvNzcg2/VmC/4X0PY9tN0PH7TdyeOtgB39y8h2vdmCx0D7hTG1rdNxEM9fabW2VqDlEGxpNaHHS4fx8fP7VhgjOj7inYZi/vj6y728sTY0MvRBtcBmK1a24D0aHVr97fmm65w4NIStr236+YfcrGfX3mdd/IuHFh1pY1NU2+pSxkbWO9yg0fEpI3NbTxg3Mkpo86RBJxfJcTesFORJhPbYqX12DF4S8qRCe2z5Q8BTR7XwFXV9JS+GTcZ43QdRxV1XcT9QE91JPIfQoLtGaEKDBEAxbDShQQKgGDaa0CABUAwbTWiQACiGjSY0SAAUw0YTGiQAimGjCQ0SAMWw0YQGCYBi2GhCgwRAMWw0oUECoBg2mtAgAVAMG01okAAoho0mNEgAFMNGExokAIphowkNEgDFsNGEBgmAYthoQoMEQDFsNKFBAqAYNprQIAFQDBtNaJAAKIaNJjRIABTDRhMaJACKYaMJDRIAxbDRhAYJgGLYaEKDBEAxbDShQQKgGDaa0CABUAwbTWiQACiGjQZB/wGXUcaSIFoQlAAAAABJRU5ErkJggg==" />
                    </li>
                </ul>
            </div>
                    <div className="bottom-center-right">
                        <ul className="list-group">
                            <li id="inventory" className="list-group-item">
                                <i className="icon icon-inventory"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom-right">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <i className="icon icon-friends"></i>
                            </li>
                            <li className="list-group-item">
                                <i className="icon icon-message"></i>
                            </li>
                        </ul>
                    </div>
                </div >
        )
    }
}

export default ToolBar
