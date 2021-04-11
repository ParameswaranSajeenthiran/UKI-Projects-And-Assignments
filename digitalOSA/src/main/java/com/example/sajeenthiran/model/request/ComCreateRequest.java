package com.example.sajeenthiran.model.request;

import java.util.Set;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class ComCreateRequest {

@NotBlank
@Size(min = 3, max = 20)	
private String name;


@NotBlank
@Size(min = 3, max = 20)
private String motto;

@NotBlank
@Size(min = 3, max = 20)
private String numMem;

@NotBlank
@Size(min = 3, max = 20)
private String bankAcc;

public Set<String> getRoles() {
	return roles;
}
public void setRoles(Set<String> roles) {
	this.roles = roles;
}
private Set<String> roles;

public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getMotto() {
	return motto;
}
public void setMotto(String motto) {
	this.motto = motto;
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

}
