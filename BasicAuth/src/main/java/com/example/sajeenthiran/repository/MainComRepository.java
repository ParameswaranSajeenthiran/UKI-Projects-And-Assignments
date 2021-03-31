package com.example.sajeenthiran.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.sajeenthiran.model.MainCommunity;
import com.example.sajeenthiran.model.SubCom;
import com.example.sajeenthiran.model.User;
@Repository
public interface MainComRepository extends MongoRepository<MainCommunity, String> {

	  Optional<MainCommunity> findByName(String name);

	  Boolean existsByName(String username);


	}

