import {Component } from 'react'

class Counter extends Component{
    state={count:0}
    onIncrement= () =>{
        this.setState((prevState)=>({count: prevState.count+1}))
    }
    onDecrement= () =>{
        this.setState((prevState)=>({count: prevState.count-1}))
    }
    render(){
        const {count}=this.state
        return(
            <div className='Container'>
                <h1 classname="count-heaading">{count}</h1>
                <button onClick={this.onIncrement}>Increment</button>
                <button onClick={this.onDecrement}>Decrement</button>

            </div>
        )
    }
}
export default Counter