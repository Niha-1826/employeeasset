package com.employee.serviceimplementation;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.entity.Employee;
import com.employee.repository.EmployeeRepository;
import com.employee.service.EmployeeService;

@Service
public class EmployeeServiceImplementation implements EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public Employee addEmployee(Employee employee) {
		employeeRepository.save(employee);
		 return employee;
		
	}

	@Override
	public Employee updateEmployeeAddressAndPhoneNumber(Employee employee) {
		
		Optional<Employee> employeeDetails = employeeRepository.findById(employee.getEmployeeId());
		employeeDetails.get().setAddress(employee.getAddress());
		employeeDetails.get().setPhoneNumber(employee.getPhoneNumber());
		
		employeeRepository.save(employeeDetails.get());
		
		return employeeDetails.get();
	}

	@Override
	public Employee updateEmployeeName(Employee employee) {
		
		Optional<Employee> employeeDetails = employeeRepository.findById(employee.getEmployeeId());
		employeeDetails.get().setEmployeeName(employee.getEmployeeName());
		
		 employeeRepository.save(employeeDetails.get());
		 return employeeDetails.get();
	}

	@Override
	public Employee retrieveEmployeeById(int id) {
		
		return employeeRepository.findById(id).get();
	}

	@Override
	public List<Employee> retriveAllEmployees() {
		return employeeRepository.findAll();
	}

	@Override
	public void deleteEmployee(int id) {
		employeeRepository.deleteById(id);
		
	}
	
	

}
