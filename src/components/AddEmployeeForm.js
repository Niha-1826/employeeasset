import { React,useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { addEmployee } from "../actions/EmployeeActions";
import Button from "../Layout/Button";
import Card from "../Layout/Card";
import MainHeader from "../Layout/MainHeader";
import './Form.css'


function AddEmployeeForm () {

    const navigate = useNavigate();

    

     const dispatch = useDispatch();

    
    const initialState = {
        employeeName:'',
        address:'',
        phoneNumber:0,
        role:''
    }
    const [employee,setEmployee] = useState(initialState);

    const handleInputChange = (event) => {
        const {name,value} = event.target;

        setEmployee({...employee,[name]:value})
    }

   
    


    const submitHandler =(event) =>{
       
        event.preventDefault();

        if(employee.employeeName.trim() === '' ||employee.address.trim() === ''|| employee.phoneNumber<0||employee.role.trim() ===''){
                 alert("Please enter valid details");
                 return;
        }

        if(employee.phoneNumber.toString().length !== 10){
                 alert("Please enter valid Mobile number");
            return;
        }

    

    

       dispatch (addEmployee(employee));
       alert('Employee Added Successfully');
       navigate('/controller');
       setEmployee(initialState);
       
    
    }

    return(
        <div className="login">
            <MainHeader />
            <h2>Employee Form</h2>
            <Card>
                
            <form className="form" onSubmit={submitHandler}>
            
    
                <div>
                   <label>Employee Name</label>
                   <input type = 'text' name='employeeName'   onChange={handleInputChange} value={employee.employeeName}  />
                   </div>
                   <div>
                   <label>Address</label>
                   <input type='text' name='address'  onChange={handleInputChange}  value={employee.address} />
                   </div>
                   <div>
                   <label>Phone Number</label>
                   <input type='number'name='phoneNumber' onChange={handleInputChange}  value = {employee.phoneNumber} />
                   </div>
                   <div>
                   <label>Role</label>
                   <input type ='text' name = 'role'   onChange={handleInputChange} value = {employee.role}></input>
                   </div>
                   <Button operation = 'Add Employee' />
                </form>  
                </Card>   
        </div>
    )
}

export default AddEmployeeForm;