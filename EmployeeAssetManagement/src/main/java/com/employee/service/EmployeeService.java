package com.employee.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.employee.entity.Employee;
import com.employee.repository.EmployeeRepository;

public interface EmployeeService {
	
	public Employee addEmployee(Employee employee);
	public Employee updateEmployeeAddressAndPhoneNumber(Employee employee);
    public Employee updateEmployeeName(Employee employee);
    public Employee retrieveEmployeeById(int id);
    public List<Employee> retriveAllEmployees();
    public void deleteEmployee(int id);

}
