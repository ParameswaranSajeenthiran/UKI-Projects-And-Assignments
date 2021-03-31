package com.example.sajeenthiran.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.sajeenthiran.model.SubCom;



@Repository
public interface SubComRepository extends MongoRepository<SubCom, String> {

  Optional<SubCom> findByName(String name);

  Boolean existsByName(String name);


}
	

