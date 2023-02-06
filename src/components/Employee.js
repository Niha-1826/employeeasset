import React from "react";
import '../Layout/EmployeeForm.css';
import { Link, useParams } from "react-router-dom";
import '../Layout/Edit.css';
import './Form.css';



function Employee(props) {

        const employee = props.employee;
    
    const  editHandler  = (employee) => { 

        
        props.setCurrentEmployee(employee);

     }  
    return(
        <div className="login">
        <form className="form">
            <label>Employee Id</label>
            <input value = {employee.employeeId}/>
            <label>Employee Name</label>
            <input value = {employee.employeeName}/>
            <label>Address</label>
            <input value = {employee.address}/>
            <label>Phone Number</label>
            <input value = {employee.phoneNumber}/>
            <label>Role</label>
            <input value = {employee.role}/> < br/><br/>
            <button className="button" onClick={editHandler(employee)}><Link to = '/controller/editPhnNumberAndAddress'> Edit </Link></button>
        </form>
        </div>
    )
}
export default Employee;