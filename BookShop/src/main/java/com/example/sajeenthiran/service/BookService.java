package com.example.sajeenthiran.service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.sajeenthiran.models.BookModel;

import com.example.sajeenthiran.repositories.BookRepository;
import com.example.sajeenthiran.repositories.CustomBookRepository;

@Service
public class BookService {
	
	@Autowired
	BookRepository bookRepository;
	
	@Autowired
	CustomBookRepository customBookrepository; 
	
public ResponseEntity<?>createBook(BookModel book){
	try {
		
//		long id=customBookRepository.getMaxEmpId()+1;
//		book.setId(id);
		bookRepository.save(book);
		return  new ResponseEntity<>(book, HttpStatus.CREATED);
	}catch (Exception e) {
	    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
}
}
public ResponseEntity<Map<String, Object>> getAllBooks(int pageNo, int pageSize, String sortBy) {
		//this method does not work properly
	  try {System.out.println(pageNo);
	  System.out.println(pageSize);
	  System.out.println(sortBy);
	  Map<String, Object> response = new HashMap<>();
	    Sort sort = Sort.by(sortBy);
	    System.out.println(sort);
		Pageable pageable = PageRequest.of(pageNo, pageSize, sort);
		 System.out.println(pageable);
	    Page<BookModel> page = bookRepository.findAll(pageable);
	    System.out.println(page);
	    response.put("data", page.getContent());
	    System.out.println(response);
	    response.put("Total no of pages", page.getTotalPages());
	    response.put("Total no of elements", page.getTotalElements());
	    response.put("Current page no", page.getNumber());
		    
		    return new ResponseEntity<>(response, HttpStatus.OK);
		} catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
public ResponseEntity<BookModel> updateBook(String id,BookModel book ) {
	Optional<BookModel>t=bookRepository.findById(id);
	if(t.isPresent()) {
		BookModel _book=t.get();
		_book.setTitle(book.getTitle());
		_book. setAuthor(book.getAuthor());
		_book.setIsbnNo(book.getIsbnNo());
		_book.setPrice(book.getPrice());
		_book.setLanguage(book.getLanguage());
		_book.setGenre(book.getGenre());
		
		BookModel updatedBook=bookRepository.save(_book);
		return new ResponseEntity<>(updatedBook,HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
}

public ResponseEntity<BookModel> getBookById(String id) {
	try {
	Optional<BookModel>book=bookRepository.findById(id);
	
	if (book.isPresent()) {
		return new ResponseEntity<>(book.get(),HttpStatus.OK);
	}else {
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	}catch(Exception e) {
		return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
	}
}

public ResponseEntity<Page<BookModel>> getBookBySearch(String searchText, int pageNo, int pageSize, String sortBy) { 
	try {  
		Pageable pageable = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
	Page<BookModel> bookPages = bookRepository.searchBooks(pageable, ".*" + searchText + ".*");
	if (bookPages.isEmpty()) { 
		return new ResponseEntity<>(HttpStatus.NO_CONTENT); 
		} 
	else{return new ResponseEntity<>(bookPages, HttpStatus.OK); 
	}
	}catch (Exception e) {
	 return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	} 

public ResponseEntity<?> deleteBookById(String id) {
	try {
		Optional<BookModel>book=bookRepository.findById(id);
		
	
	
	if (book.isPresent()) {
		bookRepository.deleteById(id);
		return new ResponseEntity<>(null,HttpStatus.OK);
	}else {
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	}catch(Exception e) {
		return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
	
	}



