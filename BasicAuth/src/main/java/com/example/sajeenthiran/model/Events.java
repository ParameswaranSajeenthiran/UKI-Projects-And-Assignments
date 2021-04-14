package com.example.sajeenthiran.model;

import java.util.List;

public class Events {
private String subCom;
private String mainCom;
private List image;
private String description;
private String title;
public Events(String subCom, String mainCom, List image, String description, String title) {
	super();
	this.subCom = subCom;
	this.mainCom = mainCom;
	this.image = image;
	this.description = description;
	this.title = title;
}
public String getSubCom() {
	return subCom;
}
public void setSubCom(String subCom) {
	this.subCom = subCom;
}
public String getMainCom() {
	return mainCom;
}
public void setMainCom(String mainCom) {
	this.mainCom = mainCom;
}
public List getImage() {
	return image;
}
public void setImage(List image) {
	this.image = image;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public String getTitle() {
	return title;
}
public void setTitle(String title) {
	this.title = title;
}

}
