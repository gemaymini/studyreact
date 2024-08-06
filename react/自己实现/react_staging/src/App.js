import React ,{Component} from 'react'
import Header from './components/Header/Header.jsx'
import List from './components/List/List.jsx'
import Footer from './components/Footer/Footer.jsx'

export default class App extends Component{
    render(){
        return(
            <div className='todo-container'>
                <div className='todo-wrap'>
                    <Header/>
                    <list/>
                    <Footer/>
                </div> 
            </div>
        )}
}