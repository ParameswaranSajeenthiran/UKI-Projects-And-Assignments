package com.example.sajeenthiran.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.sajeenthiran.model.Activities;
import com.example.sajeenthiran.model.Events;

public interface EventsRepository extends MongoRepository<Events,String> {
	List<Events>findBySubCom(String subCom );
	List<Events>findBySubComAndDescription(String subCom,String description );
}
