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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.sajeenthiran.model.Activities;
import com.example.sajeenthiran.model.MainCommunity;
import com.example.sajeenthiran.model.Reports;
import com.example.sajeenthiran.model.SubCom;
import com.example.sajeenthiran.model.request.ComCreateRequest;
import com.example.sajeenthiran.model.request.SignupRequest;
import com.example.sajeenthiran.model.response.MessageResponse;
import com.example.sajeenthiran.repository.CustomRepository;
import com.example.sajeenthiran.repository.MainComRepository;
import com.example.sajeenthiran.repository.ReportRepository;
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
}
@PostMapping("/{id}")
private ResponseEntity<?> createSubCom(@RequestBody SubCom subCom, @PathVariable String id) {
	return comService.createSubCom(subCom,id);
}

@GetMapping("/{id}")
private ResponseEntity<?> getAllSubCom(@PathVariable String id) {
	return comService.getAllSubCom(id);
}

@PostMapping("/joinSub")
public ResponseEntity<?> joinSubCom(@RequestBody Activities activity){
 	return comService.joinSubCom(activity);
}

@PostMapping("/joinMain")
public ResponseEntity<?> joinMainCom(@RequestBody Activities activity){
 	return comService.joinMainCom(activity);
}

@PostMapping("/leaveSub")
public ResponseEntity<?> leaveSubCom(@RequestBody Activities activity){
 	return comService.leaveSubCom(activity);
}
@GetMapping("/SubCom/{id}")
public ResponseEntity<?> subNumMembers(@PathVariable String id){
 	return comService.findNumMembers(id); 
}

@GetMapping("/activities")
public ResponseEntity<?> getAllActivities(){
 	return comService.getActivities(); 
}

@PostMapping("report/{id}")
private ResponseEntity<?> addReport(@RequestBody Reports report, @PathVariable String id) {
	return comService.addReport(report,id);
}
@GetMapping("/report/{type}")
public ResponseEntity<List<Reports>>getAllReports(@PathVariable String type){
	return comService.getAllReportsbyType(type);
}

}
