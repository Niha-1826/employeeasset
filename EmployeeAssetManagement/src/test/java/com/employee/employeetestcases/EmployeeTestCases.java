package com.employee.employeetestcases;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;


import com.employee.entity.Employee;
import com.employee.repository.EmployeeRepository;
import com.employee.serviceimplementation.EmployeeServiceImplementation;

@SpringBootTest
public class EmployeeTestCases {
	
	@Mock
	 private EmployeeRepository employeeRepository;

	@InjectMocks
	private EmployeeServiceImplementation employeeService;
	
	
	@Test
	 void addEmployee() {
		
        
		
	 Employee employee = new Employee(1,"yogita","hyd",7780436621L ,"analyst");
	 
	 when(employeeRepository.save(employee)).thenReturn(employee);
	 
	 Employee employeeDetails = employeeService.addEmployee(employee);
	  assertThat(employeeDetails).isEqualTo(employee);
	 
	}
	
	
	@Test
	 void retrieveAllEmployees() {
        
		
        	
	 List<Employee> employeesList = new ArrayList<>();
	 
	 Employee employee1 = new Employee(1,"yogita","hyd",7780436621L ,"analyst");
	 
	 
	 employeesList.add(employee1);
	
	 
	 when(employeeRepository.findAll()).thenReturn(employeesList);
	 
	 List<Employee> employeeList = employeeService.retriveAllEmployees();
	 
	 assertThat(employeesList).isEqualTo(employeeList);
	 
	}
	
	@Test
	void updateEmployeeAddressAndPhoneNumber() {
		
        
		
        Employee employee = new Employee(1,"yogitha","hyd",7780436621L ,"analyst");
        
	 when(employeeRepository.findById(employee.getEmployeeId())).thenReturn(Optional.of(employee));
	 
	 Employee employeeDetails = employeeService.updateEmployeeName(employee.getEmployeeId(),employee.getEmployeeName());
	
	 assertThat(employeeDetails.getEmployeeName()).isEqualTo(employee.getEmployeeName());
	 
	 verify(employeeRepository,times(1)).findById(employee.getEmployeeId());
	
	}
	
	@Test
	void deleteEmployee() {
	
		employeeService.deleteEmployee(1);
		verify(employeeRepository,times(1)).deleteById(1);
	}
	
	
	
	
	
	
	
}
