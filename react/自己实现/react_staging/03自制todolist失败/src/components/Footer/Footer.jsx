import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
  render() {
    return (
      <li>
        <p>已完成{this.props.completedCount}/全部{this.props.todoCount}</p>
        <button onClick={this.props.clearCompleted}>清除已完成任务</button>
      </li>
    )
  }
}
