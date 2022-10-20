import React, { useState } from 'react'
import { Button, Form} from 'react-bootstrap'

const FormData = (props) => {
    const [Name,SetName]=useState({_id:"",Name:"",Age:"",City:"",editStatus:false})
    
  const submit=(e)=>{
  e.preventDefault();
    if(Name.Name!==""&&Name.Age!==""&&Name.City!==""){
       if(!Name.editStatus){
       const Data={
        editStatus:Name.editStatus,
        Name:Name.Name,
        Age:Name.Age,
        City:Name.City
    }
       
     props.getData(Data)
  }
  else {
    const Data={
      editStatus:Name.editStatus,
      _id:Name._id,
      Name:Name.Name,
      Age:Name.Age,
      City:Name.City
  }
  props.getData(Data)
  }
  SetName({Name:"",Age:"",City:""})
}
}
    const infoChange=(e)=>{
        const{name,value}=e.target
       SetName({...Name,[name]:value})
  }
  React.useEffect(() => {
    if(props.setData._id !=null){
      SetName({
        _id:props.setData._id,
        Name:props.setData.Name,
        Age:props.setData.Age,
        City:props.setData.City,
        editStatus:true})
      };
  },[props.setData._id]);
  return (
    <div>
      <Form onSubmit={submit} >
        <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='Enter your Name' className="mb-3"
          required
          onChange={infoChange}
          name="Name"
          value={Name.Name}
          >
          </Form.Control>        
          <Form.Label>Age</Form.Label>
          <Form.Control type='number' placeholder='Enter your Age' className="mb-3"
          required
          name="Age"
          onChange={infoChange}
          value={Name.Age}
          >
          </Form.Control>
          <Form.Label>City</Form.Label>
          <Form.Control type='text' placeholder='Enter City' className="mb-3"
          required
          name="City"
          onChange={infoChange}
          value={Name.City}
          >
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submit}>{Name.editStatus?"Update":"Submit"}</Button>
      </Form>
    </div>
  )
}

export default FormData
