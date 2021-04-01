package com.example.sajeenthiran.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.sajeenthiran.model.MainCommunity;
import com.example.sajeenthiran.model.SubCom;
import com.example.sajeenthiran.model.request.ComCreateRequest;
import com.example.sajeenthiran.model.request.SignupRequest;
import com.example.sajeenthiran.model.response.MessageResponse;
import com.example.sajeenthiran.repository.CustomRepository;
import com.example.sajeenthiran.repository.MainComRepository;
import com.example.sajeenthiran.repository.SubComRepository;
import com.example.sajeenthiran.service.ComService;

@CrossOrigin("*")
@RestController
@RequestMapping("/com")
public class ComController {

	
	@Autowired
	ComService comService;

@PostMapping
public ResponseEntity<?> createCommunity(@Valid @RequestBody MainCommunity mainCom) {
 return comService.createMainCommunity(mainCom);
}


@GetMapping
public ResponseEntity<List<MainCommunity>>getAllMainCommunity(){
	return comService.getMainCom();
}}
