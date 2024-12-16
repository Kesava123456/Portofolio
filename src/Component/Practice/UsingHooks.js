import React,{useState} from 'react'

const UsingHooks=()=> {
    const intial=0;
    const [count,setCount]=useState(intial);

  return (
    <div>
        <h1>HOOKs COUNTER-{count}</h1>
        <button onClick={()=> setCount(p =>p +1)}>increment</button>
        <button onClick={()=>setCount(p=>p-1)}>Decrement</button>
        <button onClick={()=>setCount(intial)}>Reset</button>
    </div>
  )
}

export default UsingHooks