import React, { useReducer } from 'react'

const intialState=0;
const reducer =(state,action)=>{
    switch(action){
        case 'increment':
            return state+1  
        case 'decrement':
            return state-1
        case 'reset':
            return intialState
        default :
            return state 
    }
}
function UseReducers() {
   const [count,dispatch]= useReducer(reducer,intialState)
  return (
    <div>
        {count}
        <button onClick={()=>{dispatch('increment')}}>Increment</button>
        <button onClick={()=>{dispatch('decrement')}}>Decrement</button>
        <button onClick={()=>{dispatch('reset')}}>Reset</button>
    </div>
  )
}

export default UseReducers
/* 
import React,{useReducer} from 'react'  
import Index from './Component/UseReducers/Index'
import Index1 from './Component/UseReducers/Index1'
import Index2 from './Component/UseReducers/Index2'

export const CountContext=React.createContext() 
const intialState=0;
const reducer =(state,action)=>{
    switch(action){
        case 'increment':
            return state+1  
        case 'decrement':
            return state-1
        case 'reset':
            return intialState
        default :
            return state 
    }
}
const App =()=>{
  const [count,dispatch]=useReducer(reducer,intialState)
  return(
    
    <CountContext.Provider
       value={{countState:count,countDispatch:dispatch}}
    >
      <div>
        count-{count}
        <Index/>
        <Index1/>
        <Index2/>
  
      </div>
    </CountContext.Provider>
  )
}
export default App*/