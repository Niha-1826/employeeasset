import React from "react";
import { Link } from "react-router-dom";
import Card from "../Layout/Card";
import MainHeader from "../Layout/MainHeader";
import { useEffect, useState } from "react";



function Controller() {

    
    const adminLogin = localStorage.getItem('adminLogin');
    const [admin,setAdmin] = useState(false);
          
    console.log('from local storage' + adminLogin);

    useEffect(()=> {
        if(adminLogin === 'admin'){
            setAdmin(true);
        }
    },[]);

    console.log(admin);
     
    return(

        <div>
        <MainHeader />
            <Card>

         
    
       {admin &&  
         <div>
       <Link to ="/login/controller/addEmployee"><h2>Add Employee</h2></Link> 
          <Link to = "/login/controller/addAsset"><h2>Add Asset</h2></Link> 
        <Link to ="/login/controller/viewAllEmployees"><h2>View All Employees</h2></Link> 
         <Link to = '/login/controller/viewAllAssets'><h2>View All Assets</h2></Link>  

         </div>
}
        <Link to ='/login/controller/viewEmployeeById'><h2>View Personal Details</h2></Link>
       
         </Card>
        </div>
    )
}

export default Controller;