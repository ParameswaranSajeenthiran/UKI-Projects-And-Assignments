package com.example.sajeenthiran.service;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;

//import org.jb.main.model.PaymentRequest;
//import org.jb.main.repository.cardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.sajeenthiran.controller.CardRepository;
import com.example.sajeenthiran.model.PaymentRequest;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;

@Service
public class PaymentService {
	
	@Autowired
	CardRepository cardrepository;

	

	@Value("${stripe.keys.secret}")
	private String secretKey;
	
    @PostConstruct
    public void init() {
        Stripe.apiKey = secretKey;
    }
	public String charge(PaymentRequest chargeRequest) throws StripeException {
		 Map<String, Object> chargeParams = new HashMap<>();
	     chargeParams.put("amount", chargeRequest.getAmount());
	     chargeParams.put("currency", PaymentRequest.Currency.INR);
	     chargeParams.put("source", chargeRequest.getToken().getId());
	     
		Charge charge = Charge.create(chargeParams);
		return charge.getId();
	}
	public ResponseEntity<List<PaymentRequest>> getAllCarddetails() {
		List<PaymentRequest> card = new ArrayList<PaymentRequest>();
		cardrepository.findAll().forEach(card::add);
	
	    if (card.isEmpty()) {
	      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    }
	    return new ResponseEntity<>(card, HttpStatus.OK);
	}
	
}

