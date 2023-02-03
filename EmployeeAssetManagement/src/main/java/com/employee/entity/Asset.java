package com.employee.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table
public class Asset {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer itemNumber;
	
	@Column
	private String itemName;
	
	@Column
	private Long serialNumber;
	
	@Column
	private String status;
	
	@ManyToOne
	private Employee employee;
	
	
	public Asset() {}
	
	public Asset(Integer itemNumber, String itemName, Long serialNumber, String status, Employee employee) {
		super();
		this.itemNumber = itemNumber;
		this.itemName = itemName;
		this.serialNumber = serialNumber;
		this.status = status;
		this.employee = employee;
	}


	

	public Integer getItemNumber() {
		return itemNumber;
	}


	public void setItemNumber(Integer itemNumber) {
		this.itemNumber = itemNumber;
	}


	public String getItemName() {
		return itemName;
	}


	public void setItemName(String itemName) {
		this.itemName = itemName;
	}


	public Long getSerialNumber() {
		return serialNumber;
	}


	public void setSerialNumber(Long serialNumber) {
		this.serialNumber = serialNumber;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public Employee getEmployee() {
		return employee;
	}


	public void setEmployee(Employee employee) {
		this.employee = employee;
	}


	
	@Override
	public String toString() {
		return "Asset [itemNumber=" + itemNumber + ", itemName=" + itemName + ", serialNumber=" + serialNumber
				+ ", status=" + status + ", employee=" + employee + "]";
	}
	

	

	
	
	
	
	
	
	

}
