import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
  handleKeUp=(e)=>{
    if(e.keyCode===13){
      this.props.addTodoItem(e.target.value)
      e.target.value=''
    }
      else{
        return 
      }
  }
  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeUp} placeholder="请输入任务名称,按回车确认" type="text" />

      </div>
    )
  }
}
