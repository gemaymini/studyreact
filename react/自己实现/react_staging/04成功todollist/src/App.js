import React ,{Component} from 'react'
import Header from './components/Header/Header.jsx'
import List from './components/List/List.jsx'
import Footer from './components/Footer/Footer.jsx'
import {nanoid} from 'nanoid'
import './App.css'
export default class App extends Component{
    state={
        todos:[{id:nanoid(),name:'eat' ,done:false}]
    }
    addTodoItem=(name)=>{
        let newTodo={id:nanoid(),name:name,done:false}
        this.setState({todos:[...this.state.todos,newTodo]})
    }

    handleCheck=(id,checked)=>{
        let newTodos=this.state.todos.map((todo)=>{return todo.id===id?{id:todo.id,name:todo.name,done:todo.done=checked}:todo})
        this.setState({todos:newTodos})
    }

    deleteTodoItem=(id)=>{
        let newTodos=this.state.todos.filter((todo)=>{return todo.id!==id})
        this.setState({todos:newTodos})
    }
    
    deleteCompleted=()=>{
        let newTodos=this.state.todos.filter((todo)=>{return !todo.done})
        this.setState({todos:newTodos}) 
    }

    toggleAll=(done)=>{
        let newTodos=this.state.todos.map((todo)=>{return {...todo,done}})
        this.setState({todos:newTodos})
    }
    render(){
        const {todos}=this.state
        return(
            <div className='todo-container'>
                <div className='todo-wrap'>
                    <Header addTodoItem={this.addTodoItem} />
                    <List todos={todos} handleCheck={this.handleCheck} deleteTodoItem={this.deleteTodoItem} />
                    <Footer todos={todos} deleteCompleted={this.deleteCompleted} toggleAll={this.toggleAll} />
                </div> 
            </div>
        )}
}