package com.example.sajeenthiran.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.sajeenthiran.model.Department;
import com.example.sajeenthiran.model.Employee;
import com.example.sajeenthiran.repository.DepartmentCustomRepository;
import com.example.sajeenthiran.repository.DepartmentRepository;

@Service
public class DepartmentService {
	
	
	@Autowired
	private DepartmentRepository departmentRepository;
	private DepartmentCustomRepository departmentCustomRepository;

	
	public ResponseEntity<List<Department>> getAllDepts() {
		try {
		    List<Department> departments = new ArrayList<Department>();
		    departmentRepository.findAll().forEach(departments::add);
		
		    if (departments.isEmpty()) {
		      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		    }
		    return new ResponseEntity<>(departments, HttpStatus.OK);
		} catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	public ResponseEntity<Department> createDept(Department department) {
		try {
			Department departmentNew = departmentRepository.save(new Department(department.getId(), department.getName(), 
					department.getDescription(), department.getEmployees()));
		    return new ResponseEntity<>(departmentNew, HttpStatus.CREATED);
		} catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}
	public ResponseEntity<Department> findDeptByEmpName(String empName) {		
		Optional<Department> departmentData = departmentRepository.findDepartmentByEmployeeName(empName);

		if (departmentData.isPresent()) {
			return new ResponseEntity<>(departmentData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	public ResponseEntity<List<Employee>> findEmployeesByDeptName(String deptName) {
		try {System.out.println(deptName);
		    List<Employee> employees = departmentCustomRepository.findEmployeesByDeptName(deptName);
		    System.out.println(employees);
		    if (employees.isEmpty()) {
		    	  System.out.println(employees);
		      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		    }else{
		    	System.out.println(employees);
		    return new ResponseEntity<>(employees, HttpStatus.OK);
		    }
		} catch (Exception e) {
		    return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}
	

}
