import {Component} from 'react'

class Clock extends Component {
    constructor(props){
        super(props)
        this.state={date:new Date()}
        console.log("constructor called")
    }

    componentDidMount(){
        console.log("Componentdidmount called")
    }
    render(){
        console.log("render called")
        const {date}=this.state 
        console.log(date)
  return (
    <div>
        <h1>Clock</h1>
    </div>
  )
}
}

export default Clock



/*
import { Component } from "react";
import Clock from './Component/Practice/Clock'


class App extends Component{
  state={show:false}

  onClikToggle =()=>{
    this.setState(prevState=>{
      const {show}=prevState
      return {
        show : !show,
      }
    })
  }
  render(){
    const {show }=this.state
    return(
      <div>
        <button onClick={this.onClikToggle}>
          {show ? 'Hide clock' : 'show clock'}
        </button>
        {show && <Clock/>}
      </div>
    )
  }

}
export default App*/