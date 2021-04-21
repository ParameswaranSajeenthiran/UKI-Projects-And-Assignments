package com.example.sajeenthiran.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.sajeenthiran.model.Activities;
import com.example.sajeenthiran.model.Events;


public interface EventsRepository extends MongoRepository<Events,String> {
	List<Events>findBySubCom(String subCom );
	
	Page<Events>findBySubComAndDescription(String subCom,String description,Pageable pageable );
	



}
