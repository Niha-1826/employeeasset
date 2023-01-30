import Card from "../Layout/Card";
import MainHeader from "../Layout/MainHeader";
import './LoginPage.css';
import Button from "../Layout/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import apiClient from '../api/http-common';

function LoginPage () {

        const [employeeName,setEmployeeName] = useState('');
        const [employeeId,setEmployeeId]=useState('');

        const [error,setError] = useState(false);
    

        const employeeNameChangeHandler = (event) => { 
              setEmployeeName(event.target.value);
        }

        const employeeIdChangeHandler = (event) => {
            setEmployeeId(event.target.value);
        }

        

    const navigate = useNavigate();


    const submitHandler = async(event) => {

        event.preventDefault();


        
        if(employeeName.trim() === '' || employeeId == 0 || employeeId < 0){
            setError(true);
            return;
        }

        else{ 

            const response = await apiClient.get(`/login/${employeeId}/${employeeName}`);
            localStorage.setItem('adminLogin',response.data);
            localStorage.setItem('employeeId',employeeId);
        navigate("/login/controller");
        
        }

        
    }
    return(
        
          <div>
            
            <MainHeader />
            
            <Card>
            
                 <form className="form" onSubmit={submitHandler}>
                    {error && <h2>Please enter valid details</h2>}
                    <div className="login">
                        <div>
                            <label>Employee Id</label>
                            <input type='number' value = {employeeId} onChange={employeeIdChangeHandler}/> 
                        </div>  
                        <div>
                            <label>Employee Name</label>
                            <input type='text' value={employeeName} onChange={employeeNameChangeHandler}/>
                        </div>
                    <div>
                        <Button operation = 'Sign In'/>
                    </div>
                    </div>
                    </form>     
                    </Card>    
                    </div>
        
    )
}

export default LoginPage;