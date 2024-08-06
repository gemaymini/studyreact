import React, { Component } from 'react'
import Item from '../Item/Item'
import './List.css'
export default class List extends Component {
  handleCheck=(id,checked)=>{
    this.props.handleCheck(id,checked)
  }
  deleteTodoItem=(id)=>{
    this.props.deleteTodoItem(id)
  }
  render() {
    const {todos}=this.props
    return (
     <ul className='todo-main'>
        {todos.map((todo)=>{return <Item key={todo.id} {...todo }handleCheck={this.handleCheck} deleteTodoItem={this.deleteTodoItem} />})}
     </ul>
    )
  }
}
