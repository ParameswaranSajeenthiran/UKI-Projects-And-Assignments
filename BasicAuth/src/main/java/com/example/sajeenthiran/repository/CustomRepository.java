package com.example.sajeenthiran.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.example.sajeenthiran.model.MainCommunity;
import com.example.sajeenthiran.model.SubCom;

@Repository
public class CustomRepository {

	@Autowired
    MongoTemplate mongoTemplate;
 
    public long getMaxEmpId() {
        Query query = new Query();
    	System.out.println(query);
        query.with(Sort.by(Sort.Direction.DESC, "id"));
    	System.out.println(query);
        query.limit(1);
    	System.out.println(query);
        MainCommunity maxObject = mongoTemplate.findOne(query, MainCommunity.class);
    	System.out.println(maxObject);
        if (maxObject == null) {
            return 0L;
        }
        System.out.println(maxObject.getId());
        return maxObject.getId();
    }
    
    public long getMaxEmpIdSub() {
        Query query = new Query();
        query.with(Sort.by(Sort.Direction.DESC, "id"));
        query.limit(1);
        SubCom maxObject1 = mongoTemplate.findOne(query, SubCom.class);
        if (maxObject1 == null) {
            return 0L;
        }
        return maxObject1.getId();
    }
}
