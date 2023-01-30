import { useEffect } from "react";
import { useState } from "react";
import Employee from "./Employee";
import Button from "../Layout/Button";
import './ViewEmployeeById.css';
import Card from "../Layout/Card";
import MainHeader from "../Layout/MainHeader";

function ViewEmployeeById (props) {

    const employees = props.employees;

    const [showDetails,setShowDetails] = useState(false);


     const [filteredEmployees,setFilteredEmployees] = useState(props.employees);
     const [searchItem,setSearchItem] = useState('');

     

    const search = (event) => {
        event.preventDefault();
        setFilteredEmployees(props.employees.filter((employee)=>employee.employeeId.toString().includes(searchItem)));
        setShowDetails(true);
    }

     const searchHandler = (event) => {
        setSearchItem(event.target.value)
        
     }
       
     


     

    return(
        <div>
        <MainHeader/>
        <Card>
        <div className="finder">
               <form onSubmit={search}>
                <label>Employee Id : </label>

                <input type = 'search' onChange = {searchHandler} value = {searchItem} />
                  <Button operation ='View Details'/>
                { showDetails &&  <Employee employees = {filteredEmployees} setCurrentEmployee = {props.setCurrentEmployee} /> }
                   </form>
            </div>
            </Card>
            </div>
    )
}

export default ViewEmployeeById;