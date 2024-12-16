import React,{setState} from 'react'

const UserForm=()=> {
    const [firstname,setFirstname]=setState("kesava");
    const [lastname,setLastname]=setState("katammagari");

    const submitForm = e=>{
        e.preventDefault()
        alert(`HEllo ${firstname} ${lastname}`)
    }
  return (
    <div>
    <form onSubmit={submitForm}>
        <label>
            First Name
        </label>
        <input 
            type="text"
            value={firstname}
            onChange={e=>setFirstname(e.target.value)}
        />
        <label>Last Name</label>
        <input 
            type="text"
            value={lastname}
            onChange={e=>setLastname(e.target.value)}
        />
        <button >Submit</button>
        </form>
    </div>
  )
}

export default UserForm