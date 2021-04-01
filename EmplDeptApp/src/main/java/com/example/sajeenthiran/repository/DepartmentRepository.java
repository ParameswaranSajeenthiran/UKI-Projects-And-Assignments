package com.example.sajeenthiran.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.sajeenthiran.model.Department;
@Repository
public interface DepartmentRepository extends MongoRepository<Department, String> {
	@Query(value = "{'employees.name' : ?0}", fields = "{'employees' : 0}")
	Optional<Department> findDepartmentByEmployeeName(String empName);
}
