import {
    ADD_EMPLOYEE,
    DELETE_EMPLOYEE,
    RETRIEVE_EMPLOYEE,
    UPDATE_ADDRESS_AND_PHONENUMBER,
    UPDATE_EMPLOYEE_NAME
} from './types';

import EmployeeService from '../services/EmployeeService';


export  const  addEmployee = ({employeeId,employeeName,address,phoneNumber,role}) =>async (dispatch) => {
    try{
        const response = await EmployeeService.addEmployee({employeeId,employeeName,address,phoneNumber,role});

        dispatch({
            type : ADD_EMPLOYEE,
            payload : response.data,
        });
        return Promise.resolve(response.data);
    }catch(err){
        return Promise.reject(err);
    }
};

export const deleteEmployee = (employeeId) => async (dispatch) => {
    try{
        await EmployeeService.deleteEmployee(employeeId);
        dispatch({
            type:DELETE_EMPLOYEE,
            payload : {employeeId},
        });
    }catch(err){
        console.log(err);
    }
};

export const updateEmployeeName = (employeeId,employeeName) => async(dispatch) => {
    try{
        const response = await EmployeeService.updateName(employeeId,employeeName);
        dispatch({
            type:UPDATE_EMPLOYEE_NAME,
            payload : {employeeId,employeeName}
        });
        return Promise.resolve(response.data)
    }catch (err ){
        Promise.reject(err);
    }
}

export const updatePhoneNumberAndAddress = (employeeId,data) => async(dispatch) => {
    try{
        const response = await EmployeeService.updatephoneNumberAndAddress(employeeId,data);
        dispatch({
            type:UPDATE_ADDRESS_AND_PHONENUMBER,
            payload:response.data
        });
        return Promise.resolve(response.data)
    }catch(err){
        Promise.reject(err);
    }
}

export const retrieveEmployee = (employeeId) => async(dispatch) => {
      try{

        const response = await EmployeeService.viewEmployeeById(employeeId);
        dispatch({
            type:RETRIEVE_EMPLOYEE,
            payload:response.data,
        });

        return  Promise.resolve(response.data)
        
      }catch(err){
        Promise.reject(err);
      }
}

