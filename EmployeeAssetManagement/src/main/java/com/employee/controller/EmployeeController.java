package com.employee.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.employee.entity.Employee;
import com.employee.serviceimplementation.EmployeeServiceImplementation;

@CrossOrigin("*")
@RestController
public class EmployeeController {
	
	@Autowired
	private EmployeeServiceImplementation employeeService;
	
	@GetMapping("/viewEmployeeById/{id}")
	public Employee viewEmployeeById(@PathVariable("id") int id) {
		return employeeService.retrieveEmployeeById(id);
	}
    
	@PutMapping("/updatePhoneNumberAndAddress/{id}")
	public Employee updatePhoneNumberAndAddress(@PathVariable("id") int id,@RequestBody Employee employee) {
		return employeeService.updateEmployeeAddressAndPhoneNumber(id,employee);
	}
}
