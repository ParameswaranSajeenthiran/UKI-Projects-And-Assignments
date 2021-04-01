package com.example.sajeenthiran.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Department")
public class Department {
	@Id
	private String id;
	private String name;
	private String description;
	private List<Employee> employees;
	
	
	
	
	public Department(String id, String name, String description, List<Employee> employees) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.employees = employees;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<Employee> getEmployees() {
		return employees;
	}
	public void setEmployees(List<Employee> employees) {
		this.employees = employees;
	}
}
