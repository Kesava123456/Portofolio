import React from 'react'

const  Props=props => {
    const {companyDetails}=props 
    const{companyName,address,employesCount}=companyDetails 

  return (
    <div>
        <h1>{companyName}</h1>
        <p>{address}</p>
        <p>{employesCount}</p>
    </div>
  )
}

export default Props