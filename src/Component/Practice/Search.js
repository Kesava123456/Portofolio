const Search = props =>{
    const  {dataDetails,deleteUser}=props  
    const {uniqueNo,name,role}=dataDetails

    const onDelete=()=>{
        deleteUser(uniqueNo)
    }
    return(
        <li>
            <h1>{name}</h1>
            <p>{role}</p>
            <button className="delete-button" onClick={onDelete}>
            <img
                    src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
                    alt="cross"
                    className="delete-img"
        />
      </button>
        </li>

    )
}
export default Search

/*

import Search from './Component/Practice/Search'
import {Component} from 'react'

const initialUserDetailsList = [
    {
      uniqueNo: 1,
      name: 'Esther Howard',
      role: 'Software Developer'
    },
    {
      uniqueNo: 2,
      name: 'Floyd Miles',
      role: 'Software Developer'
    },
    {
      uniqueNo: 3,
      name: 'Jacob Jones',
      role: 'Software Developer'
    },
    {
      uniqueNo: 4,
      name: 'Devon Lane',
      role: 'Software Developer'
    }
  ]

  class App extends Component {
    
    state={searchInput:'',
      initialUserDetailsList
    }

    onChangeSearchInput =(event)=>{
      this.setState({searchInput:event.target.value})
    }

    deleteUser=uniqueNo =>{
      const {initialUserDetailsList}=this.state 
      const filterData=initialUserDetailsList.filter(
        each=>each.uniqueNo !== uniqueNo
      )
      this.setState({initialUserDetailsList:filterData
    })
    }

    render(){
      const {searchInput,initialUserDetailsList}=this.state

      const searchResult=initialUserDetailsList.filter(eachUser  =>
        eachUser.name.includes(searchInput)
      )
        return(
         <div>
          <label>Search</label>
           <input 
                type="search"
                value={searchInput}
                onChange={this.onChangeSearchInput}
            />
            <ul>
              {searchResult.map(eachData =>(
                <Search
                  dataDetails={eachData}
                  key={eachData.uniqueNo}
                  deleteUser={this.deleteUser}
                />
              ))}
            </ul>
         </div>
        )
    }
  }
export default App
*/

