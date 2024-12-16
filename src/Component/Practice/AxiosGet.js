import {Component} from 'react';
import axios from "axios";

class Axios extends Component{
    state={posts:[]}

    componentDidMount(){
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(response =>{
        console.log(response);
        this.setState({posts:response.data});
       })
       .catch(err =>{
        console.log(err);
        this.setState({errMsg:"error retriving data"})
       })

    }
    render(){
        const {posts,errMsg}=this.state
        return(
            <div>
                <h1>Axios get</h1>
            {posts.length ?
                posts.map(eachItem =>
                <div key={eachItem.id}>{eachItem.title}</div>):null
            }
            {errMsg ? <div>{errMsg}</div>:null}
            </div> 
        )
    }
}
export default Axios