import React, { Component } from 'react'

import './Item.css'
export default class Item extends Component {
  state={
    mouse:false
  }
  handleMouse = (isLeave) => {
    return ()=>{
      this.setState({mouse:isLeave})
    }
  }  

  handleCheck = (id) => {
    return (e)=>{
      this.props.handleCheck(id,e.target.checked)
    }
  }
  handleDelete = (id) => {
    window.confirm('确认删除?')
    this.props.deleteTodoItem(id)
  }
  render() {
    const {id,name,done} =this.props
    const {mouse} = this.state
    return (
      <li  style ={{backgroundColor:this.state.mouse?'white':'#ddd'}}onMouseLeave={this.handleMouse(true)} onMouseEnter={this.handleMouse(false)} >
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button  onClick={()=>{this.handleDelete(id)}}className="btn btn-danger"  style={{display:this.state.mouse?'none':'block'}}>删除</button>
      </li>
    )
  }
}
