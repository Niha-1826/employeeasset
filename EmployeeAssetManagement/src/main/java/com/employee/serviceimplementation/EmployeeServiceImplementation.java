package com.employee.serviceimplementation;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.entity.Asset;
import com.employee.entity.Employee;
import com.employee.exception.AssetNotFoundException;
import com.employee.exception.EmployeeNotFoundException;
import com.employee.repository.AssetRepository;
import com.employee.repository.EmployeeRepository;
import com.employee.service.EmployeeService;

@Service
public class EmployeeServiceImplementation implements EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Autowired
	private AssetRepository assetRepository;

	@Override
	
	public Employee addEmployee(Employee employee) {
		     
		employeeRepository.save(employee);
	
		 return employee;
		
	}

	@Override
	public Employee updateEmployeeAddressAndPhoneNumber(int id,Employee employee) {
		
		Optional<Employee> employeeDetails = employeeRepository.findById(id);
		
		if(employeeDetails.isEmpty()) {
			throw new EmployeeNotFoundException();
		}
		else {
		employeeDetails.get().setAddress(employee.getAddress());
		employeeDetails.get().setPhoneNumber(employee.getPhoneNumber());
		
		employeeRepository.save(employeeDetails.get());
		
		
		
		return employeeDetails.get();
		}
	}

	@Override
	public Employee updateEmployeeName(int id, String name) {
		
		Optional<Employee> employeeDetails = employeeRepository.findById(id);
		
		if(employeeDetails.isEmpty()) {
			throw new EmployeeNotFoundException();
		}
		else {
		
		employeeDetails.get().setEmployeeName(name);
		
		 employeeRepository.save(employeeDetails.get());
		 return employeeDetails.get();
		}
	}

	@Override
	public Employee retrieveEmployeeById(int id) {
		
          Optional<Employee> employee =  employeeRepository.findById(id);
          
          if(employee.isEmpty()) {
  			throw new EmployeeNotFoundException();
  		}
          else {
        	  return employee.get();
          }
	}

	@Override
	public List<Employee> retriveAllEmployees() {
		List<Employee> employeeDetails =  employeeRepository.findAll();
		
		if(employeeDetails.isEmpty()) {
			throw new EmployeeNotFoundException();
		}
		else {
			return employeeDetails;
		}
	}

	@Override
	public void deleteEmployee(int id) {
		Optional<Employee> employeeDetails = employeeRepository.findById(id);
		
		if(employeeDetails.isEmpty()) {
			throw new EmployeeNotFoundException();
		}
		else {
			employeeRepository.deleteById(id);
		}
		
	}
	
	public String login(int id,String name) {
		Employee employee = employeeRepository.findByEmployeeIdAndEmployeeName(id, name);
		if(employee != null) {
			return employee.getRole();
		}
		
		else {
			return null;
		}
			
		
	}

	
	

}
