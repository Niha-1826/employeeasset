import React,{ useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateEmployeeName, updatePhoneNumberAndAddress } from '../actions/EmployeeActions';
import Card from '../Layout/Card';
import MainHeader from '../Layout/MainHeader';
import './Form.css';
import Button from '../Layout/Button';

export default function EditEmployeeForm(props){

    
 
    const dispatch = useDispatch();

    const employee = props.currentEmployee;

    const [employeeName,setEmployeeName] = useState(employee.employeeName);

    
    
    const handleNameInputchange=(event)=>{
        setEmployeeName(event.target.value)
         
    }

    const nameSubmitHandler=() => {
    
      dispatch(updateEmployeeName(employee.employeeId,employeeName)); 
          
        }

        return(

         <div className='login'>
            <MainHeader />
            <Card>
        <form className='form' onSubmit= {nameSubmitHandler}>

             <label>Employee Id</label>
             <input 
             name='employeeId' 
             value ={employee.employeeId}/>

            <label>Employee Name</label>
             <input type='text'
             name='employeeName' 
             onChange={handleNameInputchange} value ={employeeName}/>

             <label>Address</label>
             <input type='text'
             name='address' 
            
              value ={employee.address}/>

             <label>Phone Number</label>
             <input type='text'
             name='phoneNumber'
            
            value ={employee.phoneNumber}/>

             <label>Role</label>
             <input type='text'
             name='employeeName' 
              value ={employee.role}/><br></br>

          <Button operation = 'Update Employee ' /> 
        
            
             <br></br>
              </form>
              </Card>
              </div>
              )
            }