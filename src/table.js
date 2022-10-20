import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'

const TableData = (props) => {
  const[tableData,SetTableData]=useState([props.getTableData])
  const submit=(e)=>{
    SetTableData(props.getTableData)
   
    e.preventDefault();
  }
  var num = 1;

  return (
    <div>
<table class="table">
  <thead>
    <tr >
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">City</th>
      <th scope="col">Edit</th>
      <th scope="col" >Delete</th>
    </tr>
  </thead>
  <tbody>
  
    
{
   props.getTableData.length>0?(props.getTableData.map((e)=>{
   return( <tr key={e._id} >
    <td scope="col">{num++  }</td>
    <td scope="col">{e.Name}</td>
    <td scope="col">{e.Age}</td>
    <td scope="col">{e.City}</td>
    <td><Button onClick={(event)=>{props.setData(e)}}>Edit</Button></td>
    <td><Button  onClick={(event)=>{props.delData(e)}}variant="danger">Delete</Button></td>

  </tr>)
  })) 
    :
    (<h3 style={{paddingLeft:"50%",paddingTop:"30px"}}>No data</h3>)
}
 
   
   

 
  
  </tbody>
</table>
    </div>
  )
}

export default TableData
