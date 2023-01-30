import http from '../api/http-common';

const addEmployee = (data) => {
    return http.post("/addEmployee",data);
}

const deleteEmployee = (employeeId) => {
    return http.delete(`/deleteEmployee/${employeeId}`);
}

const updateName = (employeeId,employeeName) => {
    return http.put(`/updateEmployeeName/${employeeId}/${employeeName}`);
}

const updatephoneNumberAndAddress = (employeeId,data) => {
    return http.put(`/updatePhoneNumberAndAddress/${employeeId}`,data);
}

const viewEmployeeById = (employeeId) => {
    return http.get(`/viewEmployeeById/${employeeId}`)
}


const EmployeeService = {
    addEmployee,
     deleteEmployee,
     updateName,
     updatephoneNumberAndAddress,
     viewEmployeeById
}

export default EmployeeService;