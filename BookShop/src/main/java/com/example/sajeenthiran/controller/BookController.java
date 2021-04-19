package com.example.sajeenthiran.controller;

import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.sajeenthiran.models.BookModel;

import com.example.sajeenthiran.service.BookService;

@CrossOrigin("*")
@RestController
@RequestMapping("/books")
public class BookController {

	@Autowired
	BookService bookService;
	
	@PostMapping
	public ResponseEntity<?>createBook(@RequestBody BookModel book){
		return bookService.createBook(book);
	}
	
	@GetMapping("/page")
	public ResponseEntity<Map<String, Object>> getAllBooks(@RequestParam(value="pageNo",defaultValue="0") int pageNo,
			@RequestParam(value="pageSize",defaultValue="0") int pageSize,@RequestParam(name = "sortBy", defaultValue = "id") String sortBy){
		return bookService.getAllBooks(pageNo,pageSize,sortBy);
	}
	@PutMapping("/{id}")
	public ResponseEntity<BookModel> updateBook(@PathVariable String id,@RequestBody BookModel book) {
		return bookService.updateBook(id, book);
	}
	@GetMapping("/{id}")
	public ResponseEntity<BookModel>getBookId(@PathVariable String id){
 return bookService.getBookById(id); 
	}
	@GetMapping("/search/{search}")
	public ResponseEntity<?> getBooks(@PathVariable String search, @RequestParam(value="pageNo",defaultValue="0") int pageNo, 
			@RequestParam(value="pageSize",defaultValue="0") int pageSize,@RequestParam(name = "sortBy", defaultValue = "id") String sortBy){
		return bookService.getBookBySearch(search,pageNo,pageSize,sortBy);
		} 
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?>deleteBookId(@PathVariable String id){
 return bookService.deleteBookById(id); 
	}

	
	
	
	
	
	
	
	
	
	
}
