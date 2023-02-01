import Card from "../Layout/Card";
import MainHeader from "../Layout/MainHeader";
import './LoginPage.css';
import Button from "../Layout/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import apiClient from '../api/http-common';


function LoginPage () {

    function disableBack () {
        
        window.history.forward();
    }
       setTimeout(disableBack(),0);
       

        const [employeeName,setEmployeeName] = useState('');
        const [employeeId,setEmployeeId]=useState('');

        
    

        const employeeNameChangeHandler = (event) => { 
              setEmployeeName(event.target.value);
        }

        const employeeIdChangeHandler = (event) => {
            setEmployeeId(event.target.value);
        }

        

    const navigate = useNavigate();


    const submitHandler = async(event) => {

    event.preventDefault();

    const response = await apiClient.get(`/login/${employeeId}/${employeeName}`);
        
        if(employeeName.trim() === '' || employeeId == 0 || employeeId < 0 || response.data === ''){
            alert("Invalid User")
            return;
        }     
            console.log(response.data);
            localStorage.setItem('adminLogin',response.data);
            localStorage.setItem('employeeId',employeeId);
               navigate("/controller");
        
        

    }

   
      
    return(
        
          <div>
            
            <MainHeader />
            
            <Card>
            
                 <form className="form" onSubmit={submitHandler}>
        
                    <div className="login">
                        <div>
                            <label>Employee Id</label>
                            <input type='text' value = {employeeId} onChange={employeeIdChangeHandler}/> 
                        </div>  
                        <div>
                            <label>Password</label>
                            <input type='password' value={employeeName} onChange={employeeNameChangeHandler}/>
                        </div>
                    <div>
                        <Button operation = 'Sign In'  />
                    </div>
                    </div>
                    </form>     
                    </Card>    
                    </div>
        
    )
}

export default LoginPage;