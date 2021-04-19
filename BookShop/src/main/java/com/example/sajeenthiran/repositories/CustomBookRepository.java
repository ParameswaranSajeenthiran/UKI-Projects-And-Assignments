package com.example.sajeenthiran.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.example.sajeenthiran.models.BookModel;


@Repository
public class CustomBookRepository {

	

	@Autowired
    MongoTemplate mongoTemplate;
 
//    public long getMaxEmpId() {
//        Query query = new Query();
//    	System.out.println(query);
//        query.with(Sort.by(Sort.Direction.DESC, "id"));
//    	System.out.println(query);
//        query.limit(1);
//    	System.out.println(query);
//        BookModel maxObject = mongoTemplate.findOne(query, BookModel.class);
//    	System.out.println(maxObject);
//        if (maxObject == null) {
//            return 0L;
//        }
//        System.out.println(maxObject.getId());
//        return maxObject.getId();
//    }
//    
}
