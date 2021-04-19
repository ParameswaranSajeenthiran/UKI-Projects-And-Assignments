package com.example.sajeenthiran.models;

public class BookModel {
	private String id;
private String title;
private String author;
private String price;
private String isbnNo;
private String genre;
private String language;
public BookModel(String id, String title, String author, String price, String isbnNo, String genre, String language) {
	super();
	this.id = id;
	this.title = title;
	this.author = author;
	this.price = price;
	this.isbnNo = isbnNo;
	this.genre = genre;
	this.language = language;
}
public String getId() {
	return id;
}
public void setId(String id) {
	this.id = id;
}
public String getTitle() {
	return title;
}
public void setTitle(String title) {
	this.title = title;
}
public String getAuthor() {
	return author;
}
public void setAuthor(String author) {
	this.author = author;
}
public String getPrice() {
	return price;
}
public void setPrice(String price) {
	this.price = price;
}
public String getIsbnNo() {
	return isbnNo;
}
public void setIsbnNo(String isbnNo) {
	this.isbnNo = isbnNo;
}
public String getGenre() {
	return genre;
}
public void setGenre(String genre) {
	this.genre = genre;
}
public String getLanguage() {
	return language;
}
public void setLanguage(String language) {
	this.language = language;
}


}
