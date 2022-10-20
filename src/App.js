import React, { useState } from 'react'
import FormData from './form';
import TableData from './table';
import axios from 'axios';
import { useEffect } from 'react';
import './App.css'

const App = () => {
  const[DataValue,SetDataValue]=useState([])
  const[EditData,SetEditData]=useState([])
  const getAll = ()=>{
        axios.get("http://localhost:5000/info").then(
          res =>{
            SetDataValue(res.data)
          }
          )
        }  
  const Data=data=>{
    if(!data.editStatus){
      axios.post("http://localhost:5000/info",data).then(res => {
      getAll();
})
    }
    else{
      axios.put("http://localhost:5000/info/update",data).then(res=>{
       getAll();
      }
      )}
  }


useEffect(() => {
   return () => {
       getAll()
       };
    }, []);

const Update=e=>{ 
        SetEditData(e)
}
const delData=e=>{
  var option = window.confirm(`Are you want to delete - ${e.Name}`)
  if(option){
    axios.delete(`http://localhost:5000/info/del/${e._id}`,).then(res=>
    getAll())
  }
    }

return (
  <div className=''>
      <h1 className='AlignData'>Student Data</h1>
    <div className=' mt-4'>
      <div className='row'>
        <div className='col-6'>
          <FormData getData={Data} setData={EditData}/>
        </div>
        <div className='col-6'>
          <TableData getTableData={DataValue} setData={Update} delData={delData}/>
          </div>
         </div>
         </div>
    </div>
  )
}

export default App
