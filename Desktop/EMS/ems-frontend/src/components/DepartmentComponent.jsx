import React from 'react'
import { useState } from 'react'
import { createDepartment, getDepartmentById, updateDepartment } from '../services/DepartmentService'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const DepartmentComponent = () => {

   const [departmentName,setdepartmentName]=useState('')
   const [departmentDescription, setdepartmentDescription]=useState('')

   const navigator= useNavigate();

   const {id} = useParams();

   useEffect(()=>{
     
    getDepartmentById(id).then((response) =>{

        setdepartmentName(response.data.departmentName);
        setdepartmentDescription(response.data.departmentDescription);
    }).catch(error =>{
        console.error(error);
    })
   },[id])



   function saveOrUpdateDepartment(e){
    e.preventDefault();

    const department = { departmentName, departmentDescription }

    console.log(department); 

   if(id){

    updateDepartment(id, department).then((response) => {
        console.log(response.data);
        navigator('/departments');
      }).catch(error => {
        console.error(error);
      })
   }else {
      createDepartment(department).then((response) => {
        console.log(response.data);
        navigator('/departments')
      }).catch(error => {
        console.error(error);
      })
    }

  }

   function pageTitle(){    
    if(id){
        return<h2 className='text-center'>Update Department</h2>
    }else{
        return<h2 className='text-center'>Add Department</h2>
    }
   }
  return (
    <div className='container'> <br /> <br />
        <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
            {
                pageTitle()
            }
             <div className='card-body'>
                <form>
            <div className='form-group mb-2'>
                <label className='form-label'>Department Name:</label>
                <input 
                
                type='text'
                name='departmentName'
                placeholder='Enter Department Name'
                value={departmentName}
                onChange={(e)=>setdepartmentName(e.target.value)}
                className='form-control'
                ></input>
                
                 
                </div> 

                <div className='form-group mb-2'>
                <label className='form-label'>Department Description:</label>
                <input 
                
                type='text'
                name='departmentDescription'
                placeholder='Enter Department Description'
                value={departmentDescription}
                onChange={(e)=>setdepartmentDescription(e.target.value)}
                className='form-control'
                ></input>
                
                 
                </div> 
                <button className ='btn btn-success mb-2' onClick={(e)=>saveOrUpdateDepartment(e)}>Submit</button>
                </form>
            </div>
            </div>
            </div>
            </div>
  )
}

export default DepartmentComponent