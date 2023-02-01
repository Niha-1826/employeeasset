import {
    ADD_EMPLOYEE, DELETE_EMPLOYEE, RETRIEVE_EMPLOYEE, UPDATE_ADDRESS_AND_PHONENUMBER, UPDATE_EMPLOYEE_NAME
} from '../actions/types';

const initialState = {};

function EmployeeReducer (employees = initialState , action) {

    const { type, payload } = action;
    switch(type) {
        case ADD_EMPLOYEE:
            return [...employees,payload];

        case DELETE_EMPLOYEE:
            return employees.filter(({ employeeId })=> employeeId !== payload.employeeId);

            default :
            return employees;

      case UPDATE_EMPLOYEE_NAME :
           return employees.map((employee) => {
               if(employee.employeeId === payload.employeeId) {
                return {
                    ...employee,
                    ...payload,
                };
               }
           });
      case UPDATE_ADDRESS_AND_PHONENUMBER:
        return employees.map((employee) => {
            if(employee.employeeId === payload.employeeId) {
                return {
                    ...employee,
                    ...payload,
                }
            }
        }) 
        
    case RETRIEVE_EMPLOYEE:
        return employees.map((employee) => {
            if(employee.employeeId === payload.employeeId){
                return {
                    ...employee,
                    ...payload
                }
            }
        })
           
}
}

export default EmployeeReducer;
