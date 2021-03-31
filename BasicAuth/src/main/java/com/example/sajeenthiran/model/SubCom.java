package com.example.sajeenthiran.model;

import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "SubCommunities")
public class SubCom {
private long id;
private String name;
private String numMem;
private String bankAcc;
private String motto;


public SubCom(long id, String name, String numMem, String bankAcc, String motto) {
	super();
	this.id = id;
	this.name = name;
	this.numMem = numMem;
	this.bankAcc = bankAcc;
	this.motto = motto;
}
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getNumMem() {
	return numMem;
}
public void setNumMem(String numMem) {
	this.numMem = numMem;
}
public String getBankAcc() {
	return bankAcc;
}
public void setBankAcc(String bankAcc) {
	this.bankAcc = bankAcc;
}
public String getMotto() {
	return motto;
}
public void setMotto(String motto) {
	this.motto = motto;
}



}
