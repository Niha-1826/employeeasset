package com.employee.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int employeeId;
	
	@Column
	private String employeeName;
	
	@Column
	private String address;
	
	@Column
	private Long phoneNumber;
	
	@Column
	private String role;
	
	@OneToMany(cascade = CascadeType.MERGE)
	@JoinTable(
			name = "employees_assets",
			joinColumns = @JoinColumn(name = "employee_id"),
			inverseJoinColumns = @JoinColumn(name="asset_id")
			
			)
	private List<Asset> assets;
	
	
	public Employee() {}


	public Employee(int employeeId, String employeeName, String address, Long phoneNumber, String role,
			List<Asset> assets) {
		super();
		this.employeeId = employeeId;
		this.employeeName = employeeName;
		this.address = address;
		this.phoneNumber = phoneNumber;
		this.role = role;
		this.assets = assets;
	}


	public int getEmployeeId() {
		return employeeId;
	}


	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}


	public String getEmployeeName() {
		return employeeName;
	}


	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public Long getPhoneNumber() {
		return phoneNumber;
	}


	public void setPhoneNumber(Long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}


	public List<Asset> getAssets() {
		return assets;
	}


	public void setAssets(List<Asset> assets) {
		this.assets = assets;
	}


	@Override
	public String toString() {
		return "Employee [employeeId=" + employeeId + ", employeeName=" + employeeName + ", address=" + address
				+ ", phoneNumber=" + phoneNumber + ", role=" + role + ", assets=" + assets + "]";
	}

	
	
	
}

         












































        