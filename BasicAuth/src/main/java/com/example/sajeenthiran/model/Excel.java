package com.example.sajeenthiran.model;

public class Excel {
	private String title;
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
	public String getDate() {
		return Date;
	}
	public void setDate(String date) {
		Date = date;
	}
	public Excel(String title, String source, String date) {
		super();
		this.title = title;
		this.source = source;
		Date = date;
	}
	private String source;
	private String Date;
}
