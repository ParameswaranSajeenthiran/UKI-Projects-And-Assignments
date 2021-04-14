package com.example.sajeenthiran.model;

import java.util.Date;

public class Reports {
	private String title;
	private String source;
	private Date date;
	private String type;
	private String subCom;
	public Reports(String title, String source, Date date, String type, String subCom) {
		super();
		this.title = title;
		this.source = source;
		this.date = date;
		this.type = type;
		this.subCom = subCom;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getSubCom() {
		return subCom;
	}
	public void setSubCom(String subCom) {
		this.subCom = subCom;
	}
	
}
