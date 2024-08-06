import React ,{Component} from 'react'
import Header from './components/Header/Header.jsx'
import List from './components/List/List.jsx'
import Footer from './components/Footer/Footer.jsx'

export default class App extends Component{
    state={
        newvalue:"",
        todoCount:0,
        completedCount:0,

    }
    addItem=(value)=>{
        this.setState({
            newvalue:value
        })
    }
    setCount=(todoCount,completedCount)=>{
        this.setState({
            todoCount:todoCount,
            completedCount:completedCount
        })
    }
    clearCompleted=()=>{
        this.setState({
            completedCount:0
    })} 
    
    
    render(){
        return(
            <div>
                <Header addItem={this.addItem}></Header><br></br>
                <ul>
                    <List newvalue={this.state.newvalue} setCount={this.setCount} completedCount={this.completedCount}></List><br></br>
                    <Footer todoCount={this.state.todoCount}completedCount={this.state.completedCount} clearCompleted={this.clearCompleted}></Footer>
                </ul>
            </div>
        )
    }
}