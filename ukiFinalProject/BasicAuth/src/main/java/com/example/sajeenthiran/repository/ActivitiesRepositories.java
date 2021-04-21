package com.example.sajeenthiran.repository;

import java.util.List;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.sajeenthiran.model.Activities;

public interface ActivitiesRepositories extends MongoRepository<Activities,String>{
	
List<Activities>findAllBySubComAndIsMember(String id,boolean isMember);
List<Activities>findBySubCom(String id);
List<Activities>findByMemberJoinedAndMainCom(String user,String mainCom );
List<Activities>findByMemberJoined(String user);
}
