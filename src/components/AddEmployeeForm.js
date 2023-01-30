import { React,useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../actions/EmployeeActions";
import Button from "../Layout/Button";
import Card from "../Layout/Card";
import MainHeader from "../Layout/MainHeader";
import './Form.css'


function AddEmployeeForm () {

    const [error,setError] = useState(false);
     const [digitError,setDigitError] = useState('');

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
                 setError(true);
                 return;
        }

        if(employee.phoneNumber.toString().length !== 10){
            setDigitError(true);
            return;
        }

    

       console.log({employee}); 

       dispatch (addEmployee(employee));
       setEmployee(initialState);
       setError(false);
       setDigitError(false);
       console.log({employee});
    }

    return(
        <div className="login">
            <MainHeader />
            <h2>Employee Form</h2>
            <Card>
                
            <form className="form" onSubmit={submitHandler}>
            {error && <h1>Please fill correct details!!!....</h1>}
                {digitError && <h1>Please check number of digits of phonenumber</h1>}
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