package com.example.sajeenthiran.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.sajeenthiran.model.MainCommunity;
import com.example.sajeenthiran.model.SubCom;
import com.example.sajeenthiran.model.response.MessageResponse;
import com.example.sajeenthiran.repository.CustomRepository;
import com.example.sajeenthiran.repository.MainComRepository;
import com.example.sajeenthiran.repository.SubComRepository;

@Service
public class ComService {
	

@Autowired
SubComRepository subComRepostiory;

@Autowired
MainComRepository mainComRepository;

@Autowired
CustomRepository customRepository;
	public ResponseEntity<?>createMainCommunity(MainCommunity mainCom){
		try {
//			System.out.println(mainCom);
			if (mainComRepository.existsByName(mainCom.getName())) {
				return ResponseEntity.badRequest()
						.body(new MessageResponse("Error: Username is already taken!"));
			}
			else{	//System.out.println(mainCom);
				long id=customRepository.getMaxEmpId()+1;
			//System.out.println(mainCom);
			
			
			MainCommunity newMainCom=new MainCommunity(id,mainCom.getName(),mainCom.getNumMembers(),
					mainCom.getMotto(),mainCom.getBankAcc());
			newMainCom.setSubCom(mainCom.getSubCom());
			mainComRepository.save(newMainCom);
			

		List<SubCom> subCom=new ArrayList<>();
		subCom.addAll(mainCom.getSubCom());
		subComRepostiory.saveAll(subCom);
			return  new ResponseEntity<>(newMainCom, HttpStatus.CREATED);
					}
			
		}catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	public ResponseEntity<List<MainCommunity>>getMainCom(){
		try {
		    List<MainCommunity> mainCommunities = new ArrayList<MainCommunity>();
		    mainComRepository.findAll().forEach(mainCommunities::add);
		
		    if (mainCommunities.isEmpty()) {
		      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		    }
		    return new ResponseEntity<>(mainCommunities, HttpStatus.OK);
		} catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
