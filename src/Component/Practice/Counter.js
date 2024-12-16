import {Component } from 'react'

class Counter extends Component{
    state={count:0}
    

    render(){
        const {count}=this.state
        return(
            <div className='Container'>
                <h1 classname="count-heaading">State Counter-{count}</h1>
                <button
                     onClick={() =>{ this.setState((prevState)=>({count: prevState.count+1})) }}>
                    Increment
                </button>
                <button
                     onClick={() =>{
                        this.setState((prevState)=>({count: prevState.count-1}))
                    }}>
                    Decrement
                </button>
                <button 
                     onClick={() =>{
                        this.setState((prevState)=>({count:0 }))
                    }}>
                    Reset
                    </button>
            </div>
        )
    }
}
export default Counter