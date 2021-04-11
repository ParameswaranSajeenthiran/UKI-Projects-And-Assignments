package com.example.sajeenthiran.model;

import java.util.HashSet;


import java.util.List;
import java.util.Set;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="MainCommunities")
public class MainCommunity {
@Id
private String id;

@NotBlank
@Size(max = 20)
private String name;

@NotBlank
@Size(max = 50)
private String numMembers;

@NotBlank
@Size(max = 50)
private String motto;
@NotBlank
@Size(max = 50)
private String bankAcc;


@DBRef
private List<SubCom>subCom;





public MainCommunity(String id, @NotBlank @Size(max = 20) String name, @NotBlank @Size(max = 50) String numMembers,
		@NotBlank @Size(max = 50) String motto, @NotBlank @Size(max = 50) String bankAcc, List<SubCom> subCom) {
	super();
	this.id = id;
	this.name = name;
	this.numMembers = numMembers;
	this.motto = motto;
	this.bankAcc = bankAcc;
	this.subCom = subCom;
}
public String getId() {
	return id;
}
public void setId(String id) {
	this.id = id;
}
public String getName() {
	return name;
}
public List<SubCom> getSubCom() {
	return subCom;
}
public void setSubCom(List<SubCom> subCom) {
	this.subCom = subCom;
}
public void setName(String name) {
	this.name = name;
}
public String getNumMembers() {
	return numMembers;
}
public void setNumMembers(String numMembers) {
	this.numMembers = numMembers;
}
public String getMotto() {
	return motto;
}
public void setMotto(String motto) {
	this.motto = motto;
}
public String getBankAcc() {
	return bankAcc;
}
public void setBankAcc(String bankAcc) {
	this.bankAcc = bankAcc;
}


}
