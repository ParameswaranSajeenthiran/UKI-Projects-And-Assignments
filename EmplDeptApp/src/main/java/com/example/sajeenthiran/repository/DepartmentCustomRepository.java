package com.example.sajeenthiran.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.example.sajeenthiran.model.Department;
import com.example.sajeenthiran.model.Employee;

@Repository
public class DepartmentCustomRepository {
	
@Autowired
MongoTemplate mongoTemplate;

public List<Employee> findEmployeesByDeptName(String deptName) {
	Query query = new Query(Criteria.where("name").is(deptName));
	query.fields().include("employees");
	List<Department> departments = mongoTemplate.find(query, Department.class);
	
	List<Employee> employees = new ArrayList<>();
	for (Department department : departments) {
		employees.addAll(department.getEmployees());
	}System.out.println(employees);
	return employees;
}
}
