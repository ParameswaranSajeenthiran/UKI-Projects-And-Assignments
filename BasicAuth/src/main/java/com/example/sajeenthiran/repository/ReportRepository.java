package com.example.sajeenthiran.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.sajeenthiran.model.Reports;
import com.example.sajeenthiran.model.SubCom;

public interface ReportRepository extends MongoRepository<Reports, String>{
	Boolean existsByTitleAndType(String title,String type);

	List<Reports>findByTypeAndSubCom(String type,String SubCom);
}
