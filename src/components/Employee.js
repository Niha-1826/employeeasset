import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Employee(props) {


    
     
    const  editHandler  = (employee) => { 


        props.setCurrentEmployee(employee);

     }    

    return(
        <div>
        <h1>Employee List</h1>
            <div>
            <table border='4cm'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Role</th>                
                    </tr>
                </thead>
                <tbody>
            
            {props.employees.map((employee)=>(
                 
                    <tr key = {employee.employeeId}>
                     <td>{employee.employeeId}</td>
                     <td>{employee.employeeName}</td>
                     <td>{employee.address}</td>
                     <td>{employee.phoneNumber}</td>
                     <td>{employee.role}</td>
               <td><button onClick = {()=> {editHandler(employee)}}> <Link to = '/login/controller/editPhnNumberAndAddress'>Edit Address And PhoneNumber</Link> </button></td> 
                     
                    
             </tr>
                                         
            ))}
            
            </tbody>
            </table>
            </div>

    </div>
    )
}
export default Employee;