package com.example.sajeenthiran.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

public class Activities {
	
	@Id
 private String id;
	

 private String subCom;

 private String memberJoined;
 private Date date;
 private boolean isMember;
 
 
 public boolean isMember() {
	return isMember;
}


public void setMember(boolean isMember) {
	this.isMember = isMember;
}


public String getId() {
	return id;
}


public void setId(String id) {
	this.id = id;
}


public String getSubCom() {
	return subCom;
}


public void setSubCom(String subCom) {
	this.subCom = subCom;
}


public String getMemberJoined() {
	return memberJoined;
}


public void setMemberJoined(String memberJoined) {
	this.memberJoined = memberJoined;
}


public Date getDate() {
	return date;
}


public void setDate(Date date) {
	this.date = date;
}


public Activities(String id, String subCom, String memberJoined, Date date,boolean isMember) {
	super();
	this.id = id;
	this.subCom = subCom;
	this.memberJoined = memberJoined;
	this.date = date;
	this.isMember=isMember;
}



  
}
