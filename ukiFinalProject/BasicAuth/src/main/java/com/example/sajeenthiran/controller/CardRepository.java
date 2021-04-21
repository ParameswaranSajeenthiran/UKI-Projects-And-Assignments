package com.example.sajeenthiran.controller;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.sajeenthiran.model.PaymentRequest;

public interface CardRepository extends MongoRepository<PaymentRequest,String>{

}
