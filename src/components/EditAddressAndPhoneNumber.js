import React from "react";
import { useDispatch } from "react-redux";
import { updatePhoneNumberAndAddress } from "../actions/EmployeeActions";
import { useState } from "react";
import MainHeader from "../Layout/MainHeader";
import Card from "../Layout/Card";
import Button from "../Layout/Button";


function EditAddressAndPhoneNumber (props) {

    const dispatch = useDispatch();

    

    const [employee , setEmployee] = useState(props.currentEmployee);

    const [error,setError] = useState(false);
 

    
    const handleInputChange = (event) => {
        const {name,value} = event.target;
        setEmployee({...employee,[name]:value})
    }

    const nameSubmitHandler=(event) => {

       event.preventDefault();
       
       if(employee.phoneNumber < 0 || employee.phoneNumber.toString().length !== 10){
        setError(true);
        return;
       }

       if(employee.employeeId == localStorage.getItem('employeeId'))
      dispatch(updatePhoneNumberAndAddress(employee.employeeId,employee)); 
          
        }

        
     return(

        <div>
      <div className='login'>
            <MainHeader />
            <Card>
        <form className='form' onSubmit= {nameSubmitHandler}>

             <label>Employee Id</label>
             <input 
             name='employeeId' 
             value ={employee.employeeId}/>

            <label>Employee Name</label>
             <input
             name='employeeName' 
             value ={employee.employeeName}/>

             <label>Address</label>
             <input type='text'
             name='address' 
            onChange={handleInputChange}
              value ={employee.address}/>

             <label>Phone Number</label>
             <input type='text'
             name='phoneNumber'
            onChange = {handleInputChange}
            value ={employee.phoneNumber}/>

             <label>Role</label>
             <input type='text'
              
              value ={employee.role}/><br></br>

          <Button operation = 'Update' /> 
        
            
             <br></br>
              </form>
              </Card>
              </div>
        </div>
    )
}

export default EditAddressAndPhoneNumber;