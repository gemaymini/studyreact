import React, { Component } from 'react'
import "./Header.css"

export default class Header extends Component {
    constructor(props) {
        super(props)
        

    }
    componentDidMount() {
        this.input.addEventListener('keydown', this.handleKeyDown)
    }
    handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            const taskName = e.target.value.trim()
            if (taskName) {
                this.props.addItems(taskName)
                e.target.value = ''
            }
        }
    }
    render() {
        return (
            <div>
                <p>
                    <span className="header-title">任务清单</span>
                </p>
                <input  ref={(input) => { this.input = input }} type="text" key='header-input' placeholder="请输入你的任务名称，按回车键确认" on />
            </div>
        )
    }
}
