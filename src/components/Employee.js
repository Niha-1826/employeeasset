import React from "react";
import '../Layout/EmployeeForm.css';
import { Link, useParams } from "react-router-dom";
import '../Layout/Edit.css';
import './Form.css';


function Employee(props) {

        
    
    const  editHandler  = (employee) => { 

        
        props.setCurrentEmployee(employee);

     }  
     return (
        <div className="login">
            
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
                        <tr key = {employee.employeeId}>
                         <td>{employee.employeeId}</td>
                         <td>{employee.employeeName}</td>
                         <td>{employee.address}</td>
                         <td>{employee.phoneNumber}</td>
                         <td>{employee.role}</td>
                         

<td><button onClick = {editHandler(employee)}> <Link to = '/controller/editPhnNumberAndAddress'>Edit</Link> </ button></td>
                </tr>
            </tbody>
            </table>

        
        </div>
     )
}
export default Employee;