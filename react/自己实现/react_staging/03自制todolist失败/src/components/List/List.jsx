import React, { Component } from 'react'
import './List.css'
import Item from '../Item/Item'

export default class List extends Component {
    state={
        list:[
            {
                id:1,
                value:"第一个任务",
                done:false
            }
        ]
    }
    deleteItem=(id)=>{
        let list=this.state.list.filter((item)=>item.id!==id)
        const newlist = [...list]
        this.setState({list:newlist})
        }
    checkItem = (id) => {
        const newList = this.state.list.map((item) => {
            if (item.id === id) {
                return { ...item, done: !item.done };
            }
            return item;
        });
        this.setState({ list: newList });
    }
    addItem=(value)=>{
        let newItem={
            id:this.state.list.length+1,
            value:value,
            done:false
        }
        const newlist = [...this.state.list,newItem]
        this.setState({list:newlist})
    }
    setCount=()=>{
        this.props.setCount(this.state.list.filter((item)=>item.done===false).length,this.state.list.length)
    }
    componentDidUpdate(){
        this.setCount()
        if(this.props.completedCount===0)
        {
            this.deletecompletedItem()
        }
    }

    deletecompletedItem=()=>{
        let newlist=this.state.list.filter((item)=>item.done===false)
        const newlist1 = [...newlist]
        this.setState({list:newlist1})

    }
    render() {
        return (
            (<div>
                {this.props.newvalue?this.addItem(this.props.newvalue):null}
                {this.state.list.map((item)=>
                    {
                        if(item.done===false)
                            {return <Item key={item.id} value={item.value} done={item.done} deleteItem={this.deleteItem} checkItem={this.checkItem} id={item.id} />}
                        else
                            {return null}
                    }
                )
                }  
            </div>)
        )
    }
}
