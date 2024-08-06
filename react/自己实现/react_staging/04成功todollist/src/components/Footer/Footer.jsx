import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
  handleCheckAll=(event)=>{
    this.props.toggleAll(event.target.checked)
  }
  render() {
    const {todos}=this.props
    const donecount=todos.reduce((count,todo)=>{
      if(todo.done){
        count++
      }
      return count
    },0)
    const totalcount=todos.length

    return (
      <div className='todo-footer'>
        <label>
          <input type="checkbox" checked={donecount===totalcount&&totalcount!==0?true:false} onChange={this.handleCheckAll}/>
        </label>
        <span>
          已完成：{donecount}/全部：{totalcount}
        </span>
        <button className='btn btn-danger' onClick={()=>this.props.deleteCompleted()}>删除已完成</button>
      </div>
    )
  }
}
