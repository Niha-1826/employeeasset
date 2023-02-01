import React from "react";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../actions/EmployeeActions";
import Card from "../Layout/Card";
import MainHeader from "../Layout/MainHeader";
import { Link } from "react-router-dom";



function EmployeeList (props) {

    const dispatch = useDispatch();    

    const  editHandler  = (employee) => { 

        props.setCurrentEmployee(employee);

     }  
     
       

    return(
        <div>
            <MainHeader />
            <Card>
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
                         
                        <td><button onClick={()=> {editHandler(employee)}}><Link to = '/controller/editEmployee'>Edit Name</Link></button></td> 
                        
                        <td><button onClick = {() => {dispatch(deleteEmployee(employee.employeeId))}}>Delete</button></td>
                 </tr>
                                             
                ))}
                
                </tbody>
                </table>
                </div>
            </Card>
        </div>
    )
}

export default EmployeeList;