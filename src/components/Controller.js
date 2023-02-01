import React from "react";
import { Link } from "react-router-dom";
import Card from "../Layout/Card";
import MainHeader from "../Layout/MainHeader";
import { useEffect, useState } from "react";
import Employee from "./Employee";
import apiClient from '../api/http-common';
import '../Layout/EmployeeForm.css';
import { useDispatch } from "react-redux";
import { retrieveEmployee } from "../actions/EmployeeActions";



function Controller(props) {

    

     const employeeId = localStorage.getItem('employeeId');
     
     const [employee,setEmployee] = useState(''); 
    
    const adminLogin = localStorage.getItem('adminLogin');
    const [admin,setAdmin] = useState(false);
          
    

    useEffect(()=>{apiClient.get(`/viewEmployeeById/${employeeId}`).then((response)=>{
        setEmployee(response.data);
      })},[]);

   

    useEffect(()=> {
        if(adminLogin === 'admin'){
            setAdmin(true);
        }
    },[]);

      history.pushState({
        state : employee
      })
     
    return(

        <div>
        <MainHeader />
            <Card>
   
            <div className="employee">
        <Employee employee = {employee} setCurrentEmployee = {props.setCurrentEmployee} />
        </div>
         
    
       {admin &&  
         <div>
       <Link to ="/controller/addEmployee"><h2>Add Employee</h2></Link> 
          <Link to = "/controller/addAsset"><h2>Add Asset</h2></Link> 
        <Link to ="/controller/viewAllEmployees"><h2>View All Employees</h2></Link> 
         <Link to = '/controller/viewAllAssets'><h2>View All Assets</h2></Link>  

         </div>
}        
        
         </Card>
        </div>
    )
}

export default Controller;