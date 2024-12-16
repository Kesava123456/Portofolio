import React,{useState,useEffect} from 'react'
import axios from 'axios'


const  Efffect=()=> {
    const [posts, setPosts]=useState([])

    
    useEffect(()=>{
        axios.get("http://img.omdbapi.com/?apikey=[yourkey]&")
            .then(res =>{
                console.log(res)
                setPosts(res.data)
            })
            .catch(err =>{
                console.log(err)
            }) 
    })

  return (
    <div>   
        <ul>
            {posts.map(eachItemm =>(<li  key={eachItemm.id}>{eachItemm.title}</li> ))}
        </ul>
    </div>
  )
}

export default Efffect