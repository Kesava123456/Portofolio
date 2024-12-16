import {useRef,useEffect} from 'react'

const  FocusInput=()=> {

    const inputRef=useRef(null)
    
     useEffect=(()=>{
        inputRef.current.focus();
    },[])
  return (
    <div>
        <input type="text" placeholder='type something !' ref={inputRef}/>
    </div>
  )
}

export default FocusInput