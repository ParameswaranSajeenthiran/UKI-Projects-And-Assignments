package com.example.sajeenthiran.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.sajeenthiran.model.Department;
import com.example.sajeenthiran.model.Employee;
import com.example.sajeenthiran.service.DepartmentService;
@CrossOrigin("*")
@RestController
@RequestMapping("/departments")
public class DepartmentController {
	
	
	@Autowired
	private DepartmentService departmentService;
	
	@GetMapping
	private ResponseEntity<List<Department>> listAllDepts() {
		return departmentService.getAllDepts();
	}
	
//	@GetMapping(params = "deptId")
//	private ResponseEntity<Department> getDeptById(@RequestParam String deptId) {
//		return departmentService.getDeptById(deptId);
//	}
	
	@PostMapping
	private ResponseEntity<Department> createDept(@RequestBody Department department) {
		return departmentService.createDept(department);
	}
	

	@GetMapping(params = "empName")
	private ResponseEntity<Department> listDeptByEmpName(@RequestParam String empName) {
		return departmentService.findDeptByEmpName(empName);
	}
	@GetMapping(value = "/{deptName}/employees")
	private ResponseEntity<List<Employee>> listEmployeesByDeptName(@PathVariable String deptName) {
		return departmentService.findEmployeesByDeptName(deptName);
	}
}
