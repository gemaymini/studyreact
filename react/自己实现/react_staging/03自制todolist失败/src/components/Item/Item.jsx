import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {

    render() {
        return (
            <div>
                <li key={this.props.id*3} onClick={()=>this.props.checkItem(this.props.id)}>
                    <p key={this.props.id*3+1}>{this.props.value}</p>
                    <button key={this.props.id*3+2}  onClick={()=>this.props.deleteItem(this.props.id)}></button>
                </li>
            </div>
        )
  }
}